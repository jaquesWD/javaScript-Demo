function getStyleAttr(obj,ele){

    if(obj.currentStyle){
        return parseFloat(obj.currentStyle(ele));
    }else{
        return parseFloat(window.getComputedStyle(obj,null)[ele]);
    }
    
}

//动画框架


function buffer(obj,elementObj,fn){

    clearInterval(obj.timer);

     let begin = null,target = 0,flag = false;

     obj.timer = setInterval(function(){
        
         flag = true;
       
        for(let key in elementObj){

            if(key == 'opacity'){
                begin = getStyleAttr(obj,key)*100;
                target = elementObj[key]*100;
            }else{
                 //获取属性
                begin  =  getStyleAttr(obj,key);
                target = elementObj[key];
            }
               
                 //得到速度
                let speed = (target - begin)*0.2;
                speed = target > begin?Math.ceil(speed):Math.floor(speed);
            
                if(key == 'opacity'){
                    obj.style.opacity = (begin+speed)/100;
                }else{
                    obj.style[key] = begin + speed +"px";
                }
              
                
            
               // obj.innerHTML = begin;
            
                if(begin  !== target){
                      flag = false;
                }
        } 


        //清除定时器

        if(flag){
            clearInterval(obj.timer);

           fn && fn();
        }

     

    },30);
}