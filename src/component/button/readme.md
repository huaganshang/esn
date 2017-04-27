#按钮类型 #
一、组件属性：
1、type
type=primary
type=success
type=warning
type=error
不设置为默认样式。
2、shape
通过设置shape属性为circle，可将按钮置为圆的形状。
3、long
通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。
4、disabled
通过添加disabled属性可将按钮设置为不可用状态。

二、调用方式：
<app-button>默认按钮</app-button>
<app-button disabled>disabled</app-button>
<app-button type="primary">信息按钮</app-button>
<app-button type="success">成功按钮</app-button>
<app-button type="warning">警告按钮</app-button>
<app-button type="error">错误按钮</app-button>
<app-button type="primary" shape="circle">圆角按钮</app-button>
<app-button type="primary" shape="circle"></app-button>
<app-button type="success" long>确认提交</app-button>
<app-button type="error" long>确认删除</app-button>
