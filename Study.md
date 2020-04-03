# 前端学习

# CSS

## 1.属性

1. backface-visibility:设置盒子背面是否可见,在元素标签翻转的时候可用
2. 

## 2.一些特殊方法

1. 盒子内宽度计算

```css
.test-box{
	/*当多个元素在水品上刚好占据宽度的100%,但是再加上border就无法在一行,可以使用box-sizing*/
	width: 25%;
	border: 2px solid red;
	/*content-box:默认的盒子尺寸计算方式;border-box:盒子的尺寸计算方式从边框开始,盒子的尺寸,边框和内填充都算盒子尺寸;*/
	box-sizing: border-box;
	/*用计算的方法也可以实现上面的方式,但是最好用上面的方式*/
	/*width: calc(25%-4)*/
}
```




# HTML