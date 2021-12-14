import React, {Component} from "react";
import { Container, Row, Table, Card } from "react-bootstrap";
class GenotypeTable extends Component{
    constructor(props) {
        super(props);
        this.state = {areas:{
            "D13S634":{
                area1:1264,
                area2:1187
            }
        }}
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
                        <tr>
                        <td>D13S634</td>
                        <td>1263</td>
                        <td>1187</td>
                        <td></td>
                        <td>{1263/1187}</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </Table>
        )
    }
}
export default GenotypeTable;