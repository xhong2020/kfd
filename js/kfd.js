/**
 * Created by Administrator on 2017/8/27.
 */
window.onload = function () {
    //轮播图开始
    //获取所有图片项目
    var innerItems=document.getElementsByClassName("img-item");
    //获取所有指示器项目
    var indicatorsLists=document.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("li");
    //获取导航控制左链接对象
    var controlLeft=document.getElementsByClassName("left")[0];
    //获取导航控制右链接对象
    var controlRight=document.getElementsByClassName("right")[0];
    var current=0;
    innerItems[current].className="img-item active";
    indicatorsLists[current].className="active";
    //轮播函数开始
    function slide(){
        for(var i=0;i<indicatorsLists.length;i++){
            //设置所有图片不可见
            innerItems[i].className="img-item";
            //设置所有指示不高亮
            indicatorsLists[i].className="";
            indicatorsLists[i].index=i;
            //给所有指示器添加单击事件
            indicatorsLists[i].onclick=function(){
                // 如果单击的指示器跟当前页相同，则停止执行，返回
                if(this.index==current){
                    return false;
                }else {
                    current=this.index;
                    slide();
                }
            }
        }
        innerItems[current].className="img-item active";
        indicatorsLists[current].className="active";
        console.log(current);
    }

    //对导航控制左链接绑定单击事件，实现后退
    controlLeft.onclick=function(){
        current--;
        if(current==-1){
            current=indicatorsLists.length-1;
        }
        slide();
    }
    //对导航控制右链接绑定单击事件，实现前进
    controlRight.onclick= function(){
        current++;
        if(current==indicatorsLists.length){
            current=0;
        }
        slide();
    }
    //开始自动轮播
    var timer=setInterval(controlRight.onclick,3000);

    //鼠标移入到导航控制链接上时停止轮播
    controlLeft.onmouseover=controlRight.onmouseover=function(){
        clearInterval(timer);
        controlLeft.style.opacity=1;
        controlRight.style.opacity=1;
    }

    //鼠标移出导航控制链接上时恢复轮播
    controlLeft.onmouseout=controlRight.onmouseout=function(){
        timer=setInterval(controlRight.onclick,3000);
        controlLeft.style.opacity=0;
        controlRight.style.opacity=0;
    }
    //轮播图结束

    //选项卡开始
    //获取选项卡标签标题
    var tabsLabel=document.getElementsByClassName("tabs-label")[0].getElementsByTagName("li");
    var tabsContent=document.getElementsByClassName("tabs-pane");
    var current2=0;
    tabsLabel[current2].className="active";
    tabsContent[current2].className="tabs-pane active";

    for(var j=0;j<tabsLabel.length;j++)
    {
        tabsLabel[j].index=j;
        tabsLabel[j].onmouseover=function(){
            showTabs(this.index);
        }
    }
    function showTabs(a){
        for(var j=0;j<tabsLabel.length;j++) {
            tabsLabel[j].className="";
            tabsContent[j].className="tabs-pane";
        }
        tabsLabel[a].className="active";
        tabsContent[a].className="tabs-pane active";
    }
}



