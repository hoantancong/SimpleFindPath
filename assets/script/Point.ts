import { _decorator, Component, Vec3, CCBoolean } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Point')
export class Point extends Component {
    @property(CCBoolean)
    private isLock:boolean;
    start() {

    }
    getIsLock(){
        return this.isLock;
    }
    setUnlock(){
        this.isLock = false;
    }
    getPosition(){
        return this.node.position;
    }
}


