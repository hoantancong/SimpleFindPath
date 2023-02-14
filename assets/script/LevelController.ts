import { _decorator, Component, Node, tween } from 'cc';
import { Point } from './Point';
const { ccclass, property } = _decorator;

@ccclass('LevelController')
export class LevelController extends Component {
    @property(Point)
    private pointList:Point[]=[];
    @property(Node)
    private player:Node = null;
    start() {
        this.checkCanPass();
        setTimeout(() => {
            //example player touch the pin 2;
            this.unlockPoint2();
        }, 3000);
    }
    private checkCanPass(){
        for(let i = 0; i < this.pointList.length;i++){
            if(this.pointList[i].getIsLock()){
                console.log('Cannot pass');
                return;
            }
        }
        console.log('Let pass');
        //move the path
        this.movePlayerThroughThePointList();
    }
    private movePlayerThroughThePointList(){
        //move from p1 to p3;
        //p1 - p2
        for(let i = 0; i < this.pointList.length;i++){
            tween(this.player).sequence(
                tween(this.player).delay(i*1),
                tween(this.player).to(1,{position:this.pointList[i].getPosition()})
            ).start();

        }

    }
    private unlockPoint2(){
        this.pointList[1].setUnlock();
        this.checkCanPass();
    }
    
    update(deltaTime: number) {
        
    }
}


