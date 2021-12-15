import React, {Component} from "react";
import { Container, Row, Table, Card } from "react-bootstrap";
import prenatalRAD_data  from "../../data/GuidedPractice/prenatalRAD.json"

class GenotypeTable extends Component{
    constructor(props) {
        super(props);
        this.initState();
    }
    initState(){
        let tableState = [];
        for (let key of Object.keys(prenatalRAD_data)){
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
        tableState[key].warning = this.checkRatioWarning(tableState[key].ratio);
        this.setState({tableState});
    }
    calculateValue(val1,val2){
        if ((val1 != null && val1 != '') && (val2 != null && val2 != '')){
            var ratio = Number.parseFloat(val1)/Number.parseFloat(val2);
            return ratio;
        }
        return "";
    }
    checkRatioWarning(ratio){
        if (ratio === "" || ratio === null){
            return "";
        }
        ratio = Number.parseFloat(ratio);
        var abnormalRatioRange1Min = 0.45;
        var abnormalRatioRange1Max = 0.65;
        var abnormalRatioRange2Min = 1.8;
        var abnormalRatioRange2Max = 2.4;
        var ratioCheck1 = abnormalRatioRange1Min <= ratio && ratio <= abnormalRatioRange1Max;
        var ratioCheck2 = abnormalRatioRange2Min <= ratio && ratio <= abnormalRatioRange2Max;

        if (ratioCheck1 || ratioCheck2){
            return "Abnormal ratio detected";
        }
        else{
            return "";
        }
    }

    render(){
        return (
                <Table>
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
                                    <td><input type="number" maxLength={6} value={this.state.tableState[key].area1} onChange={(e)=>{this.onValueChange(key,"area1",e.target.value)}}/></td>
                                    <td><input type="number" maxLength={6} value={this.state.tableState[key].area2} onChange={(e)=>{this.onValueChange(key,"area2",e.target.value)}}/></td>
                                    <td><input type="number" maxLength={6} value={this.state.tableState[key].area3} onChange={(e)=>{this.onValueChange(key,"area3",e.target.value)}}/></td>
                                    <td>{this.state.tableState[key].ratio}</td>
                                    <td>{this.state.tableState[key].warning}</td>
                                    <td>{this.state.tableState[key].conclusion}</td>
                                </tr>
                            )
                        },this)}
                      
                    </tbody>
                </Table>
        )
    }
}
export default GenotypeTable;