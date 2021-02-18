<template>
  <div>
    <div>
      <input type="file" accept="image/jpeg, image/png" v-if="filebox" @change="onImageChange"/>
      <button @click="uploadImage()">アップロード</button>
    </div>
    <div v-show="uploadedImage">
      <div>
        <img :src="uploadedImage"  class="imgstyle" alt="画像がありません">
      </div>
      <button @click="removeImage()">戻る</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      uploadedImage:"",
      filebox:true
    };
  },
  methods:{
    // 画像の反映
    onImageChange(e){
      console.log(e)
      const files = e.target.files || e.dataTransfer.files; //FileListに転送
      this.createImage(files[0])
    },
    createImage(file){
      const reader = new FileReader(); // FileReaderを作成
      reader.onload = e => { //コンテンツを読み込み、利用可能になると発火
        this.uploadedImage = e.target.result;  // 画像ファイルを base64 文字列に変換
      };
      reader.readAsDataURL(file); // 読み込みを実行
    },
    removeImage(){
      this.uploadedImage=false;
      this.filebox=false;
      this.$nextTick(() => {this.filebox=true;})
    },
    uploadImage(){
      let params = new FormData();
      params.append('image', this.uploadedImage)
      if(this.uploadedImage){
        alert("画像のアップロードが完了しました。")
        axios.post("/grayscale",params)
        .then(response => {
          console.log(response);
          this.uploadedImage=response.data.result; 
        })
      }else{
        alert("画像を選択してください。")
      }
    }
  }
}
</script>

<style scoped>
.imgstyle{
  width:50%;
  height:auto;
}
</style>