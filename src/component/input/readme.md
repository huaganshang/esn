#按钮类型 #
一、组件属性：
1、type
input文本框：type=text（默认方式）
textarea文本域：type=textarea
2、disabled
通过添加disabled属性可设置为不可用状态。
3、placeholder
默认文字

二、调用方式：
<app-input type="text" v-model="value" placeholder="请输入..." style="width: 500px;"></app-input>
<app-input type="textarea" v-model="value" placeholder="禁用的输入框" disabled></app-input>
<app-input type="textarea" v-model="value" placeholder="请输入..." style="width: 500px;"></app-input>
