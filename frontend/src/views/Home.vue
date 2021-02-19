<template>
  <div>
    <div id="header">
      <p class="title">画像をお墓に入れるツール</p>
      <p class="subtitle">不謹慎</p>
    </div>
    <div id="namebox">
      <p><span>誰のお墓？</span></p>
      <input type="text" v-model="name" /><span>のお墓</span>
    </div>
    <div id="uploadbox">
        <input type="file" accept="image/jpeg, image/png" v-if="filebox" @change="onImageChange"/>
        <button @click="uploadImage()">お墓に入れる</button>
    </div>
    <div id="preview" v-show="uploadedImage">
      <div class="preview">
        <p>preview</p>
        <img :src="uploadedImage"  class="imgstyle" alt="画像がありません">
      </div>
      <button @click="removeImage()">戻る</button>
    </div>
    <div id="result" v-show="grayImage">
      <div class="flame">
        <img :src="grayImage" class="resultstyle">
      </div>
      <div class="foundation"><p>{{this.name}}のお墓</p></div>
      <div class="tea">
        <p> ζ</p>
        <p>且</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      name:"",
      uploadedImage:"",
      filebox:true,
      grayImage:""
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
      if(this.uploadedImage){
          if(confirm("本当にいいの？")){
            let params = new FormData();
            params.append('image', this.uploadedImage)
            axios.post("/grayscale",params)
            .then(response => {
              console.log(response);
              this.grayImage=response.data.result;
              alert("画像のアップロードが完了しました。")
            }).catch(
              error => {
                console.log(error);
                alert("画像のアップロードに失敗しました。")
                });
          }
      }else{
        alert("画像を選択してください。")
      }
    }
  }
}
</script>

<style scoped>
/*header*/
#header{
  text-align: center;
  padding:5px;
  background-color: black;
  margin-bottom: 10%;
}

.title{
  font-style: italic;
  font-size:4.8rem;
  color:white;
}

.subtitle{
  font-size:1.6rem;
  color:white;
}
/*namebox*/
#namebox{
  text-align: center;
  margin-bottom: 10%;
}

#namebox span{
  font-size:2.4rem;
  vertical-align: middle;
}

/*uploadbox*/
#uploadbox{
  display: flex;
  justify-content: space-evenly; /* 各アイテムを均等に配置し各アイテムの周りに同じ大きさの間隔を置く */
  align-items: center; /* アイテムを先頭にまとめる */
  flex-wrap: wrap; /*複数行に折り返す*/
  margin-bottom: 20px;
}

input{
  font-size:2.4rem;
}

#uploadbox button{
  font-size:2.4rem;
}

/*preview*/
#preview{
  width:25%;
  margin: 0 auto;
  margin-bottom:5%;
}

.preview{
  border: 1px solid;
  margin-bottom:5px
}

.preview p{
  text-align: center;
}

.imgstyle{
  width:100%;
  height:100%;
  vertical-align: top;
}

#preview button{
  margin-bottom:10px;
}

/*result*/
.flame{
  border: 10px solid;
  width:50%;
  margin: 0 auto;
}

.resultstyle{
  width:100%;
  height:100%;
  vertical-align: top;
}

.foundation{
  border:10px solid;
  background-color:black;
  width:65%;
  height:50px;
  margin: 0 auto;
  padding:10px;
}

.foundation p{
  font-size:3.6rem;
  color:white;
  text-align: center;
}

.tea{
  padding:15%;
}
.tea p{
  text-align: center;
  font-size:6.4rem;
}
</style>