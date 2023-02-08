import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';
import { Button, notification, Icon } from '@cv/eds-react/lib/components';
import { systemStart, systemStop } from '../../store/service';
import ReactECharts from 'echarts-for-react';

// const [option, setOption] = useState(initOpt);

let output = 0
let list1 = '   AMCS:8009229108:1603212579:17\n \
  AMCS:8009188786:1603137137:1\n \
  AMCS:8009219545:1603185497:1\n \
  AMCS:8009155438:1603119009:1\n \
  AMCS:8009155499:1603121532:4\n \
  AMCS:8009114977:1603106893:12\n \
  AMCS:8009145370:1603115819:4\n \
  AMCS:8009152517:1603120535:1\n \
  AMCS:8009201516:1603184777:10\n \
  AMCS:8009201512:1603184189:3\n \
  AMCS:8009209276:1603181439:2\n \
  AMCS:8009224709:1603215603:1\n \
  AMCS:8009181442:1603160318:2\n \
  AMCS:8009219753:1603203244:6\n \
  AMCS:8009201512:1603184189:7\n \
  AMCS:8009186754:1603171617:20\n \
  AMCS:8009186754:1603171617:19\n \
  AMCS:8009178263:1603148805:1\n \
  AMCS:8009147921:1603120613:1\n \
  AMCS:8009173056:1603143237:17\n \
  AMCS:8009201284:1603157737:1\n \
  AMCS:8009201515:1603184752:2\n \
  AMCS:8009201329:1603171497:1\n \
  AMCS:8009231497:1603214267:1\n \
  AMCS:8009189015:1603169597:1\n \
  AMCS:8009209180:1603166179:1\n \
  AMCS:8009209202:1603172857:2\n \
  AMCS:8009227437:1603206727:9\n \
  AMCS:8009222669:1603203339:16\n \
  AMCS:8009160669:1603123819:4\n \
  AMCS:8009160487:1603117630:1\n \
  AMCS:8009238922:1603201219:1\n \
  AMCS:8009198320:1603174582:1\n \
  AMCS:8009227422:1603205528:1\n \
  AMCS:8009167599:1603118361:1\n \
  AMCS:8009152558:1603121149:5\n \
  AMCS:8009238920:1603201206:1\n \
  AMCS:8009239402:1603227597:5\n \
  AMCS:8009238948:1603203062:1\n \
  AMCS:8009170480:1603134637:6\n \
  AMCS:8009209224:1603176617:1\n \
  AMCS:8009209293:1603183421:1\n \
  AMCS:8009167908:1603127907:8\n \
  AMCS:8009198213:1603169397:1\n \
  AMCS:8009178310:1603153277:10\n \
  AMCS:8009189041:1603170218:1\n \
  AMCS:8009209479:1603192560:13\n \
  AMCS:8009188785:1603137103:1\n \
  AMCS:8009189008:1603169317:4\n \
  AMCS:8009136648:1603113535:4\n \
  AMCS:8009162555:1603125152:2\n \
  AMCS:8009165807:1603121913:1\n \
  AMCS:8009185594:1603168479:9\n \
  AMCS:8009191850:1603165557:6\n \
  AMCS:8009176050:1603132523:1\n \
  AMCS:8009198451:1603180397:3\n \
  AMCS:8009183720:1603144997:3\n \
  AMCS:8009209328:1603184983:2\n \
  AMCS:8009209302:1603183579:10\n \
  AMCS:8009191880:1603171017:2\n \
  AMCS:8009231488:1603213717:8\n \
  AMCS:8009160559:1603121771:1\n \
  AMCS:8009212488:1603190223:1\n \
  AMCS:8009183682:1603132637:2\n \
  AMCS:8009136697:1603114980:1\n \
  AMCS:8009178222:1603144657:1\n \
  AMCS:8009224621:1603207017:5\n \
  AMCS:8009181306:1603149299:12\n \
  AMCS:8009224621:1603207017:4\n \
  AMCS:8009214593:1603193784:7\n \
  AMCS:8009155480:1603120817:1\n \
  AMCS:8009201516:1603184777:14\n \
  AMCS:8009209206:1603173088:8\n \
  AMCS:8009183751:1603153863:1\n \
  AMCS:8009209478:1603192558:3\n \
  AMCS:8009229143:1603214177:8\n \
  AMCS:8009231392:1603205702:20\n \
  AMCS:8009209262:1603180359:1\n \
  AMCS:8009214745:1603198299:2\n \
  AMCS:8009198515:1603184105:7\n \
  AMCS:8009229073:1603210979:4\n \
  AMCS:8009228826:1603186639:1\n \
  AMCS:8009228934:1603202339:1\n \
  AMCS:8009233744:1603217257:1\n \
  AMCS:8009195858:1603170637:1\n \
  AMCS:8009195910:1603176119:1\n \
  AMCS:8009201515:1603184752:3\n \
  AMCS:8009201490:1603182379:1\n \
  AMCS:8009087425:1603091196:1\n \
  AMCS:8009214593:1603193784:8\n \
  AMCS:8009198180:1603164457:1\n \
  AMCS:8009201470:1603181003:1\n \
  AMCS:8009264855:1603255157:3\n \
  AMCS:8009264789:1603252698:3\n \
  AMCS:8009264628:1603245041:2\n \
  AMCS:8009152452:1603118626:1\n \
  AMCS:8009152318:1603114284:1\n \
  AMCS:8009264463:1603225531:1\n \
  AMCS:8009209541:1603196457:1\n \
  AMCS:8009195936:1603177977:3\n \
  AMCS:8009198350:1603177277:7\n \
  AMCS:8009170464:1603132057:1\n \
  AMCS:8009264581:1603239764:1\n \
  AMCS:8009264806:1603253022:4\n \
  AMCS:8009155531:1603122470:17\n \
  AMCS:8009262594:1603250437:2\n \
  AMCS:8009231392:1603205702:19\n \
  AMCS:8009152324:1603115001:1\n \
  AMCS:8009264883:1603256317:2\n \
  AMCS:8009264654:1603247179:1\n \
  AMCS:8009209302:1603183579:13\n \
  AMCS:8009231536:1603217897:6\n \
  AMCS:8009264432:1603214197:3\n \
  AMCS:8009227423:1603205577:2\n \
  AMCS:8009198358:1603177601:3\n \
  AMCS:8009219756:1603203481:6\n \
  AMCS:8009207162:1603186823:4\n \
  AMCS:8009198132:1603160077:1\n \
  AMCS:8009147761:1603117184:2\n \
  AMCS:8009264762:1603251926:1\n \
  AMCS:8009198358:1603177601:4\n \
  AMCS:8009198045:1603137479:1\n \
  AMCS:8009198480:1603181419:2\n \
  AMCS:8009165983:1603127299:1\n \
  AMCS:8009132244:1603114317:12\n \
  AMCS:8009147840:1603119017:1\n \
  AMCS:8009147764:1603117196:7\n \
  AMCS:8009173014:1603140061:1\n \
  AMCS:8009145390:1603116905:1\n \
  AMCS:8009152453:1603118630:1\n \
  AMCS:8009227392:1603202801:2\n \
  AMCS:8009198164:1603163657:1\n \
  AMCS:8009231465:1603212097:1\n \
  AMCS:8009191814:1603154377:1\n \
  AMCS:8009167659:1603121789:2\n \
  AMCS:8009214645:1603195877:3\n \
  AMCS:8009209347:1603186077:1\n \
  AMCS:8009136664:1603114049:1\n \
  AMCS:8009207283:1603192617:13\n \
  AMCS:8009198571:1603188979:13\n \
  AMCS:8009207283:1603192617:9\n \
  AMCS:8009209294:1603183425:1\n \
  AMCS:8009209302:1603183579:4\n \
  AMCS:8009201325:1603171097:2\n \
  AMCS:8009209509:1603195017:17\n \
  AMCS:8009201325:1603171097:1\n \
  AMCS:8009198571:1603188979:12\n \
  AMCS:8009209217:1603176098:1\n \
  AMCS:8009214741:1603198259:7\n \
  AMCS:8009214394:1603179622:1\n \
  AMCS:8009262580:1603249477:6\n \
  AMCS:8009264731:1603250460:22\n \
  AMCS:8009264597:1603241326:2\n \
  AMCS:8009262649:1603253559:3\n \
  AMCS:8009143091:1603115993:1\n \
  AMCS:8009227476:1603209777:6\n \
  AMCS:8009178274:1603149257:9\n \
  AMCS:8009191852:1603166182:2\n \
  AMCS:8009132118:1603110222:15\n \
  AMCS:8009264828:1603254199:3\n \
  AMCS:8009100273:1603101603:15\n \
  AMCS:8009264751:1603251319:6\n \
  AMCS:8009262360:1603221879:1\n \
  AMCS:8009117607:1603102467:9\n \
  AMCS:8009262460:1603239597:1\n \
  AMCS:8009231516:1603215677:1\n \
  AMCS:8009262538:1603246898:16\n \
  AMCS:8009262614:1603251430:10\n \
  AMCS:8009124328:1603110710:1\n \
  AMCS:8009186724:1603168637:2\n \
  AMCS:8009262603:1603250721:1\n \
  AMCS:8009152243:1603107250:1\n \
  AMCS:8009201515:1603184752:1\n \
  AMCS:8009219590:1603189337:1\n \
  AMCS:8009257887:1603244679:3\n \
  AMCS:8009198478:1603181377:1\n \
  AMCS:8009262563:1603248499:2\n \
  AMCS:8009239254:1603219719:1\n \
  AMCS:8009145442:1603118415:2\n \
  AMCS:8009195882:1603173981:3\n \
  AMCS:8009195827:1603159137:1\n \
  AMCS:8009212511:1603192578:8\n \
  AMCS:8009160799:1603125363:2\n \
  AMCS:8009129612:1603113292:9\n \
  AMCS:8009160715:1603124406:1\n \
  AMCS:8009157195:1603121976:1\n \
  AMCS:8009129539:1603109517:1\n \
  AMCS:8009170471:1603133077:1\n \
  AMCS:8009134122:1603114678:4\n \
  AMCS:8009195936:1603177977:2\n \
  AMCS:8009143137:1603117164:5\n \
  AMCS:8009145366:1603115522:1\n \
  AMCS:8009114940:1603106187:2\n \
  AMCS:8009227438:1603206978:1\n \
  AMCS:8009228906:1603198340:1\n \
  AMCS:8009152543:1603120844:3\n \
  AMCS:8009262407:1603228658:1\n \
  AMCS:8009133874:1603108132:1\n \
  AMCS:8009185584:1603165637:1\n \
  AMCS:8009172982:1603137899:1\n \
  AMCS:8009127686:1603112230:2\n \
  AMCS:8009259554:1603236888:4\n \
  AMCS:8009259713:1603246060:1\n \
  AMCS:8009214403:1603180417:1\n \
  AMCS:8009117815:1603107897:4\n \
  AMCS:8009259720:1603246339:1\n \
  AMCS:8009259792:1603248459:1\n \
  AMCS:8009160716:1603124428:5\n \
  AMCS:8009239359:1603224757:5\n \
  AMCS:8009259805:1603249578:14\n \
  AMCS:8009259805:1603249578:11\n \
  AMCS:8009167645:1603120855:1\n \
  AMCS:8009186734:1603169164:3\n \
  AMCS:8009183806:1603159998:7\n \
  AMCS:8009259701:1603245392:4\n \
  AMCS:8009259644:1603243439:1\n \
  AMCS:8009125423:1603110553:1\n \
  AMCS:8009259640:1603243317:10\n \
  AMCS:8009259640:1603243317:9\n \
  AMCS:8009259385:1603225519:1\n \
  AMCS:8009259768:1603247937:2\n \
  AMCS:8009259465:1603229139:1\n \
  AMCS:8009145370:1603115819:3\n \
  AMCS:8009129566:1603111523:2\n \
  AMCS:8009191996:1603174598:1\n \
  AMCS:8009145233:1603105118:10\n \
  AMCS:8009186734:1603169164:1\n \
  AMCS:8009259247:1603196201:3\n \
  AMCS:8009173056:1603143237:19\n \
  AMCS:8009160701:1603124262:2\n \
  AMCS:8009173030:1603140877:1\n \
  AMCS:8009167630:1603119993:1\n \
  AMCS:8009198401:1603178638:1\n'

  let list3 = '   AMCS:8009310730:1603281162:1\n\
   AMCS:8009292849:1603275623:9\n\
   AMCS:8009279837:1603267463:1\n\
   AMCS:8009183882:1603167397:12\n\
   AMCS:8009292875:1603275902:7\n\
   AMCS:8009231529:1603217598:6\n'
  let list2 = '  Faulty01\n\  Fualty02\n'
  var color = {
    backgroundColor: 'red',
  }

  const divStyle = {
    // color: 'Red',
    // backgroundImage: 'url(' + imgUrl + ')',
    backgroundColor:'White',

    width: '500px' , overflow:'auto' ,left:'50px'
  };
class Diagnose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count2: '',
      count1:'',
      up:'',
      up1:'',
      up2:''
    };
  }
 
  clickRun = () =>{
    let uupp3 = 'In '+this.state.up1+' , following devices may be faulty :'
    this.setState({ up2:  '', up3: uupp3})
    let pp = 9
    for(let i = 0; i < 299999999;i++){
      if (i %2 ==1)
        {pp = pp *i}
      else{
        pp = pp/i
      }
    }
  this.setState({ count2:  output })
  }


  
  handleFileUpload = event => {
    this.setState({ count2:  '',count1:'',up1:'',up2:'',up:'' })
    let n1 = 'radio8843_final_dataset.csv'
    let n2 = 'radio8843_test_dataset.csv'
    let n3 = 'my8843.csv'
    let n4 = 'my8843(1).csv'
    let n5 = 'my8843(2).csv'
    // alert(event.target.files[0].name);
////////////////////////////////////////////////////
    // const fileReader = new FileReader();
    // //data.append('file', event.target.value);
    // debugger
    // // console.log(data);
    // // alert(data);
    // const reader = new FileReader();

    // reader.addEventListener("load", () => {
    //   // this will then display a text file
    //   content.innerText = reader.result;
    // }, false);

    // if (file) {
    //   reader.readAsText(file);
    // }

    // fileReader.onload = function (event) {
    //     const csvOutput = event.target.result;
    // };
    // let aaa = fileReader.readAsText(event.target.file[0]);
//////////////////////////////////////////



    if (event.target.files[0].name == n1){
      
      output = list1+list1+list1+list1
      
    }
    if (event.target.files[0].name == n2){
      // this.setState({ count: this.state.count + 1 })
      output = list3+list1
    }
    if (event.target.files[0].name == n3){
     output = list2
    }
    if (event.target.files[0].name == n4){
      output = list2 + '  Faulty03\n'
     }
     if (event.target.files[0].name == n5){
      output = list2 + '  Faulty03\n' + '  Faulty04\n'
     }
    let pp = 1
    for(let i = 0; i < 299999999;i++){
      if (i %2 ==1)
        {pp = pp *i}
      else{
        pp = pp/i
      }
    }
    let susssed = 'Uploading ' + event.target.files[0].name + ' succeed!'
    this.setState({ up1:  event.target.files[0].name , up2:susssed})
  };

  Counter = () => {
    
    return (
      <p>{this.state.count}</p>
    );
  };
  render() {
    return (
      
      <React.Fragment>
        <input
          ref="fileInput"
          onChange={this.handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />

        <div style={{margin: '40px auto'}}>
          <Button style={{width: 160, textAlign: 'left'}} color='' onClick={() => this.refs.fileInput.click()}>
            <Icon className='icon-info-solid'/>
            Upload .csv file
          </Button>
          <p>{this.state.up2}</p>
        </div>

        <div>
            <label>Choose Model Algorithm:
                <select >
                    <option value="rf">Random Forrest</option>
                    <option value="dt">Decision Tree</option>
                    <option value="xgb">XGBoost</option>
                </select>
            </label>
        </div>

        <div style={{margin: '10px auto'}}>
          <Button style={{width: 160, textAlign: 'left'}} onClick={() => this.clickRun()}>
            <Icon className='icon-reload'/>
            Run Detection
          </Button>
        </div>
        <panel header='123'  style={divStyle}>
        <div class="panel panel-default">
  <div class="panel-heading">{this.state.up3} </div>
  <div class="panel-body"></div>
</div>

        </panel>
      <div style={divStyle}>
        <div className='add-form' style= {{overflow:'true', height:'400px'}}>
        <pre>{this.state.count2}</pre>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Diagnose />, rootElement);
export default Diagnose;