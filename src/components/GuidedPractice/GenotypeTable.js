import React, {Component} from "react";
import { Button, Container, Row, Table, Card } from "react-bootstrap";
import prenatalRAD_data  from "../../data/GuidedPractice/prenatalRAD.json"
import NormalMale from '../../assets/normalMaleKey.jpg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class GenotypeTable extends Component{
    constructor(props) {
        super(props);
        this.initState();
    }
    initState(){
        let tableState = [];
        for (let key of Object.keys(prenatalRAD_data.markers)){
            tableState[key] = {
                area1:null,
                area2:null,
                area3:null,
                ratio:null,
                warning:"",
                conclusion:""
            };

        }
        this.state = {tableState:tableState};
        this.onValueChange = this.onValueChange.bind(this);
        this.calculateValue = this.calculateValue.bind(this);
    }
    onValueChange(key,valueName,value){
        var tableState = {...this.state.tableState}
        tableState[key][valueName] = value;
        tableState[key].ratio = this.calculateValue(tableState[key].area1,tableState[key].area2);
        tableState[key].warning = this.checkWarning(tableState[key]);
        this.setState({tableState});
    }
    calculateValue(val1,val2){
        if ((val1 != null && val1 != '') && (val2 != null && val2 != '')){
            if ( val2 == 0 ){
                return "";
            }
            var ratio = (Number.parseFloat(val1)/Number.parseFloat(val2)).toFixed(4);
            return ratio;
        }
        return "";
    }
    checkWarning(data){
        var warningStr = "";
        var ratio = data.ratio;
        ratio = Number.parseFloat(ratio);
        var abnormalRatioRange1Min = 0.45;
        var abnormalRatioRange1Max = 0.65;
        var abnormalRatioRange2Min = 1.8;
        var abnormalRatioRange2Max = 2.4;
        var ratioCheck1 = abnormalRatioRange1Min <= ratio && ratio <= abnormalRatioRange1Max;
        var ratioCheck2 = abnormalRatioRange2Min <= ratio && ratio <= abnormalRatioRange2Max;

        if (ratioCheck1 || ratioCheck2){
            warningStr = "Abnormal ratio detected"
        }
        if ((data.area1 != null && data.area1.length>0) && data.area2 != null && data.area2.length>0 && data.area3 != null && data.area3.length>0){
            if (warningStr.length>0){
                warningStr = warningStr+", ";
            }
            warningStr = warningStr+"3 alleles";
        }
        if (Number.parseInt(data.area1) === 0 || Number.parseInt(data.area2) === 0){
            if (warningStr.length>0){
                warningStr = warningStr+", ";
            }
            warningStr = warningStr+"Absent marker"
        }
        return warningStr;
    }

    render(){
        return (
            <>
                <h2>Genotype Table</h2>
                <p>In the following interactive example, transcribe the peak area values into a genotype table (enter "0" if the marker is absent). The table will automatically calculate the values and inform you if there are any warnings you should take into consideration.</p>
                <h5>Possible warnings:</h5>
                <ul>
                    <li>Ratio: 2 peaks seen, non normal ratio</li>
                    <li>3 alleles: 3 peaks seen</li>
                    <li>Absent: marker not seen (i.e. for Y chrom specific markers in biological female)</li>
                </ul>
                <Card>
                    <Card.Body>
                        <TransformWrapper initialScale={0.5} minScale={0.4} maxScale={2} centerOnInit={true}>
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <React.Fragment>
                                    <div className="tools"  className="mb-2">
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomIn()}>Zoom In</Button>
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => zoomOut()}>Zoom Out</Button>
                                        <Button variant="outline-primary" className="mr-2 py-1" onClick={() => resetTransform()}>Reset</Button>
                                    </div>
                                    <TransformComponent wrapperStyle={{width:"100%",height:600}}>
                                        <img src={NormalMale} alt="Normal Male Key" />
                                    </TransformComponent>
                                </React.Fragment>
                            )}

                        </TransformWrapper>
                    </Card.Body>
                </Card>
               <div className="my-4 py-2" style={{maxHeight:500,overflowY:"scroll"}}>
                <Table responsive >
                        <thead>
                            <tr>
                            <th>Marker</th>
                            <th>Area 1</th>
                            <th>Area 2</th>
                            <th>Area 3</th>
                            <th>A1/A2</th>
                            <th>Warning</th>
                            <th>Conclusion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(this.state.tableState).map((key)=>{
                                return (
                                    <tr>
                                        <td>{key}</td>
                                        <td><input style={{width:70}} type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} value={this.state.tableState[key].area1} onChange={(e)=>{this.onValueChange(key,"area1",e.target.value)}}/></td>
                                        <td><input style={{width:70}} type="text" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} maxLength={5} value={this.state.tableState[key].area2} onChange={(e)=>{this.onValueChange(key,"area2",e.target.value)}}/></td>
                                        <td><input style={{width:70}} type="text" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} maxLength={5} value={this.state.tableState[key].area3} onChange={(e)=>{this.onValueChange(key,"area3",e.target.value)}}/></td>
                                        <td>{this.state.tableState[key].ratio}</td>
                                        <td style={{color:"red"}}>{this.state.tableState[key].warning}</td>
                                        <td>{this.state.tableState[key].conclusion}</td>
                                    </tr>
                                )
                            },this)}
                        
                        </tbody>
                    </Table>                                   
               </div>
               
                <Button onClick={this.props.onClickNext} style={{width: 100,marginLeft:"auto"}}>Next</Button>
            </>

        )
    }
}
export default GenotypeTable;