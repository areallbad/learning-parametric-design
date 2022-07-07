let hMap = [];
let res = 5;
let thresh = 4;
let t = 0;
move = true;

function setup() {
  createCanvas(2000, 1000);
  for(let i = 0; i < 1 + width/res; i++){
    hMap[i] = [];
    for(let j = 0; j < 1 + height/res; j++){
      hMap[i][j] = noise(i/50, j/50)*100;
    }
  }
}

function draw() {
  background(255);
  if(move){
    for(let i = 0; i < 1 + width/res; i++){
      hMap[i] = [];
      for(let j = 0; j < 1 + height/res; j++){
        hMap[i][j] = noise((i+t/5)/100, (j+sin(t/10))/100, t/600)*100;
      }
    }
    t += 1;
  }
  

  
  for(let i = 0; i < 1 + width/res; i++){
    for(let j = 0; j < 1 + height/res; j++){
      
      // strokeWeight(6);
      // point(i*res, j*res);
      // text(round(hMap[i][j]), i*res+7, j*res)
      
      if(i < width/res && j < height/res){
        let a = floor(hMap[i][j]/thresh);
        let b = floor(hMap[i+1][j]/thresh);
        let c = floor(hMap[i][j+1]/thresh);
        let d = floor(hMap[i+1][j+1]/thresh);
        
        let ab = 0;
        let ac = 0;
        let bcx = 0;
        let bcy = 0;
        let bd = 0;
        let cd = 0;
        let height = 0;
        
        if(a != b){
          let contourValue = thresh * max(a,b);
          height =contourValue;
          let diff = abs(hMap[i][j] - hMap[i+1][j]) ;
          let add = abs(hMap[i][j] - contourValue);
          ab = i * res + res * add / diff;
        }
        
        if(a != c){
          let contourValue = thresh * max(a,c);
          height =contourValue;
          
          let diff = abs(hMap[i][j] - hMap[i][j+1]) ;
          let add = abs(hMap[i][j] - contourValue);
          ac = j * res + res * add / diff;
        }
        
        if(c != d){
          let contourValue = thresh * max(c,d);
          height =contourValue;
          
          let diff = abs(hMap[i][j+1] - hMap[i+1][j+1]) ;
          let add = abs(hMap[i][j+1] - contourValue);
          cd = i * res + res * add / diff;
        }
        
        if(b != c){
          let contourValue = thresh * max(b,c);
          height =contourValue;
          
          let diff = abs(hMap[i+1][j] - hMap[i][j+1]) ;
          let add = abs(hMap[i+1][j] - contourValue);
          bcx = (i+1) * res - res * add / diff;
          bcy = j * res + res * add / diff;
        }
        
        if(b != d){
          let contourValue = thresh * max(b,d);
          height =contourValue;
          
          let diff = abs(hMap[i+1][j] - hMap[i+1][j+1]) ;
          let add = abs(hMap[i+1][j] - contourValue);
          bd = j * res + res * add / diff;
        }
        
        strokeCap(round)
        stroke('#F27127')
        strokeWeight(10)
        if(height%12 == 0){
          strokeWeight(20)
        }
        
        strokeWeight(noise(i / 9, j / 12)*30);

        if(ab){
          if(ac){
            line(ab, j*res, i*res, ac);
          }
          if(bcx || bcy){
            
            line(ab, j*res, bcx, bcy);
          }
        }else if(ac){
          if(bcx || bcy){
            
            line(i*res, ac, bcx, bcy);
          }
        }
        
        if(cd){
          if(bd){
            
            line(cd, (j+1)*res, (i+1)*res, bd);
          }
          if(bcx || bcy){
            
            line(cd, (j+1)*res, bcx, bcy);
          }
        } else if(bd){
          if(bcx || bcy){
            
            line((i+1)*res, bd, bcx, bcy);
          }
        }
        
        
      }
      
    }
  }

}
function keyReleased() {
  save();
}

//https://editor.p5js.org/rjgilmour/sketches/l3XM1tz6d

//strokeCap(round)