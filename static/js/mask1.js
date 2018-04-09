window.onload=function(){
  var index1=0;
  var num1 = $(".showImage0 .wrap ul li");
  var number1=$(".showImage0 .wrrap ul li");
  var len1=num1.length;
  var m=0,xx=0,yy=0;
  // var aa=600/len1;
  // var oimg=$(".abc .wrap ul li img");
  // for(var i=0;i<len1;i++)
  // {
  //     oimg[i].css("width",aa,"hight",aa);
  // }

  //图片点击事件
  number1.click(function(){
    m=$(this).index();

    number1.eq(m).addClass('action').siblings().removeClass('action');
    num1.eq(m).fadeIn().siblings().fadeOut();
  })
  $(".btn7 span").click(function(){
    index1=$(this).index();

    if(index1){m++;}
    else m--;
    if(m>=len1)
    m=m%len1;
    if(m<0)m=len1-1;

    num1.eq(m).fadeIn().siblings().fadeOut();
    number1.eq(m).addClass('action').siblings().removeClass('action');
    // alert(index1);
  })
  var index2=0;
  var num2 = $(".showImage1 .wrap ul li");
  var number2=$(".showImage1 .wrrap ul li");
  var len2=num2.length;
  var n;
  number2.click(function(){
    xx=$(this).index();
    number2.eq(xx).addClass('action').siblings().removeClass('action');
    num2.eq(xx).fadeIn().siblings().fadeOut();
  })
  $(".btn8 span").click(function(){
    n=$(this).index();
    if(n){xx++;}
    else xx--;
    if(xx>=len2)
    xx=xx%len2;
    if(xx<0)xx=len2-1;
    num2.eq(xx).fadeIn().siblings().fadeOut();
    number2.eq(xx).addClass('action').siblings().removeClass('action');
    // alert(index2);
  })

  var yy=0;
  var number3=$(".showImage2 .wrrap ul li");
  var num3 = $(".showImage2 .wrap ul li");
  var len3=num3.length;
  var x;
  number3.click(function(){
    yy=$(this).index();
    number3.eq(yy).addClass('action').siblings().removeClass('action');
    num3.eq(yy).fadeIn().siblings().fadeOut();
  })
  $(".btn9 span").click(function(){
    x=$(this).index();
    if(x){yy++;}
    else yy--;
    if(yy>=len3)
    yy=yy%len3;
    if(yy<0)yy=len3-1;
    num3.eq(yy).fadeIn().siblings().fadeOut();
    number3.eq(yy).addClass('action').siblings().removeClass('action');
    // alert(yy);
  })


}
