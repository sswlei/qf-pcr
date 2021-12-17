import { Component } from "react";

class FinalConclusion extends Component{
    render(){
        return <div>
            <h3>Is there enough evidence for a final conclusion?</h3>
            <p>
Normal: must have at least 2 markers for each chromosome that have normal ratio: all others uninformative
<br></br>
<br></br>

Trisomy: for affected chromosome: must have at least 2 markers for chromosome that have trisomy ratio, or 3 peaks: all others uninformative
If both normal and abnormal allele patterns seen, call for further testing
Triploidy (3N): suspected if all chromosomes show trisomy (for this demo, select Other as conclusion)
<br></br>
<br></br>

Sex chromosome abnormalities
Klinefelters: need AMEL XY, one peak for Ch Y loci, 2 peaks or uninformative for Ch X loci, TAF9L ratio is for 2X (i.e. Ch 3 and Ch X peaks same peak area)
Turner: need AMEL XX, no ChY loci peaks, 1 peak for Ch X loci, TAF9L ratio is for 1X (i.e. Ch 3 has peak area twice Ch X peak area (remember to also review autosomes: there can be more than only abnormality (but this is rare) 


            </p>
        </div>
    }
}
export default FinalConclusion;