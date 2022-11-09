const AWS = require('aws-sdk');
const dynamodbClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {

    AWS.config.update({
        region:  "us-west-2",
    });
    let data = {
        "practice_prenatalrad_1":{
            "data":{
                "markers":{
                    "DXS6803":{
                        "questions":[
                            {
                                "id":"DXS6803_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
                            {
                                "id":"DXS6803_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1435":{
                        "questions":[
                            {
                                "id":"D21S1435_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            
                            {
                                "id":"D21S1435_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S11":{        
                        "questions":[
                            {
                                "id":"D21S11_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S11_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1437":{
                        "questions":[
                            {
                                "id":"D21S1437_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1437_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S634":{
                        "questions":[
                            {
                                "id":"D13S634_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
                            {
                                "id":"D13S634_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S535":{
                        "questions":[
                            {
                                "id":"D18S535_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S535_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "DXS1187":{
                        "questions":[
                            {
                                "id":"DXS1187_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
                            {
                                "id":"DXS1187_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1446":{
                        "questions":[
                            {
                                "id":"D21S1446_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1446_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "HPRT":{
                        "questions":[
                            {
                                "id":"HPRT_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
                            {
                                "id":"HPRT_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D18S386":{
                        "questions":[
                            {
                                "id":"D18S386_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S386_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S305":{
                        "questions":[
                            {
                                "id":"D13S305_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S305_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "AMEL":{
                        "questions":[
                            {
                                "id":"AMEL_q1",
                                "options":[
                                    {"name":"X","value":"x"},
                                    {"name":"XX","value":"xx"},
                                    {"name":"XY","value":"xy"}
                                ],
                                "answer":"xy"
                            }
                        ]
                    },
                    "TAF9L":{
                        "questions":[
                            {
                                "id":"taf9l_q1",
                                "options":[
                                    {"name":"1 X chromosome","value":"onexchrom"},
                                    {"name":"2 X chromosomes","value":"twoxchrom"}
                                ],
                                "answer":"onexchrom"
                            }
                        ]
                    },
                    "D18S978":{
                        "questions":[
                            {
                                "id":"D18S978_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S978_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "SRY":{
                        "questions":[
                            {
                                "id":"SRY_q1",
                                "options":[
                                    {"name":"Present","value":"present"},
                                    {"name":"Absent","value":"absent"}
                                ],
                                "answer":"present"
                            }
                        ]
                    },
                    "D13S800":{
                        "questions":[
                            {
                                "id":"D13S800_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S800_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S390":{
                        "questions":[
                            {
                                "id":"D18S390_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S390_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S628":{
                        "questions":[
                            {
                                "id":"D13S628_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S628_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1409":{
                        "questions":[
                            {
                                "id":"D21S1409_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1409_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S252":{
                        "questions":[
                            {
                                "id":"D13S252_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S252_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1442":{
                        "questions":[
                            {
                                "id":"D21S1442_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1442_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S819":{
                        "questions":[
                            {
                                "id":"D18S819_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S819_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    }
            
                },
                "final_conclusion":"Trisomy 21 male",
                "image":"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/rad_4.jpg"
            }
        },
        "practice_prenatalrad_2":{
            "data":
            {
                "markers":{
                    "DXS6803":{
                        "questions":[
                            {
                                "id":"DXS6803_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"DXS6803_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1435":{
                        "questions":[
                            {
                                "id":"D21S1435_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1435_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S11":{
                        "questions":[
                            {
                                "id":"D21S11_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S11_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1437":{
                        "questions":[
                            {
                                "id":"D21S1437_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1437_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S634":{
                        "questions":[
                            {
                                "id":"D13S634_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S634_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S535":{
                        "questions":[
                            {
                                "id":"D18S535_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch18"
                            },
                    
                            {
                                "id":"D18S535_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "DXS1187":{
                        "questions":[
                            {
                                "id":"DXS1187_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"DXS1187_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1446":{
                        "questions":[
                            {
                                "id":"D21S1446_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1446_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "HPRT":{
                        "questions":[
                            {
                                "id":"HPRT_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"HPRT_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S386":{
                        "questions":[
                            {
                                "id":"D18S386_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S386_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S305":{
                        "questions":[
                            {
                                "id":"D13S305_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch13"
                            },
                            
                            {
                                "id":"D13S305_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"triallelic"
                            }
                        ]
                    },
                    "AMEL":{
                        "questions":[
                            {
                                "id":"AMEL_q1",
                                "options":[
                                    {
                                        "name":"X",
                                        "value":"x"
                                    },
                                    {
                                        "name":"XX",
                                        "value":"xx"
                                    },
                                    {
                                        "name":"XY",
                                        "value":"xy"
                                    }
                                ],
                                "answer":"xx"
                            }
                        ]
                    },
                    "TAF9L":{
                        "questions":[
                            {
                                "id":"taf9l_q1",
                                "options":[
                                    {
                                        "name":"1 X chromosome",
                                        "value":"onexchrom"
                                    },
                                    {
                                        "name":"2 X chromosomes",
                                        "value":"twoxchrom"
                                    }
                                ],
                                "answer":"twoxchrom"
                            }
                        ]
                    },
                    "D18S978":{
                        "questions":[
                            {
                                "id":"D18S978_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S978_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "SRY":{
                        "questions":[
                            {
                                "id":"SRY_q1",
                                "options":[
                                    {"name":"Present","value":"present"},
                                    {"name":"Absent","value":"absent"}
                                ],
                                "answer":"absent"
                            }
                        ]
                    },
                    "D13S800":{
                        "questions":[
                            {
                                "id":"D13S800_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S800_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S390":{
                        "questions":[
                            {
                                "id":"D18S390_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch18"
                            },
                            {
                                "id":"D18S390_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D13S628":{
                        "questions":[
                            {
                                "id":"D13S628_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch13"
                            },
                            
                            {
                                "id":"D13S628_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1409":{
                        "questions":[
                            {
                                "id":"D21S1409_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1409_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S252":{
                        "questions":[
                            {
                                "id":"D13S252_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch13"
                            },
                            {
                                "id":"D13S252_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1442":{
                        "questions":[
                            {
                                "id":"D21S1442_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch21"
                            },
                            
                            {
                                "id":"D21S1442_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D18S819":{
                        "questions":[
                            {
                                "id":"D18S819_q1",
                                "options":[
                                    {
                                        "name":"Ch13",
                                        "value":"ch13"
                                    },
                                    {
                                        "name":"Ch18",
                                        "value":"ch18"
                                    },
                                    {
                                        "name":"Ch21",
                                        "value":"ch21"
                                    },
                                    {
                                        "name":"Ch X",
                                        "value":"chx"
                                    },
                                    {
                                        "name":"Ch Y",
                                        "value":"chy"
                                    }
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S819_q2",
                                "options":[
                                    {
                                        "name":"Uninformative",
                                        "value":"uninformative"
                                    },
                                    {
                                        "name":"Diallelic",
                                        "value":"diallelic"
                                    },
                                    {
                                        "name":"Triallelic",
                                        "value":"triallelic"
                                    }
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    }
                },
                "final_conclusion":"Trisomy 13 female",
                "image":"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/rad_10.jpg"
            }
        },
        "practice_prenatalrad_3":{
            "data":{
                "markers":{
                    "DXS6803":{
                        "questions":[
                            {
                                "id":"DXS6803_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
                            {
                                "id":"DXS6803_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1435":{
                        "questions":[
                            {
                                "id":"D21S1435_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1435_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S11":{        
                        "questions":[
                            {
                                "id":"D21S11_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S11_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1437":{
                        "questions":[
                            {
                                "id":"D21S1437_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1437_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S634":{
                        "questions":[
                            {
                                "id":"D13S634_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
        
                            {
                                "id":"D13S634_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S535":{
                        "questions":[
                            {
                                "id":"D18S535_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S535_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "DXS1187":{
                        "questions":[
                            {
                                "id":"DXS1187_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"DXS1187_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1446":{
                        "questions":[
                            {
                                "id":"D21S1446_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1446_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "HPRT":{
                        "questions":[
                            {
                                "id":"HPRT_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
                            {
                                "id":"HPRT_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D18S386":{
                        "questions":[
                            {
                                "id":"D18S386_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
                            
                            {
                                "id":"D18S386_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"triallelic"
                            }
                        ]
                    },
                    "D13S305":{
                        "questions":[
                            {
                                "id":"D13S305_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S305_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "AMEL":{
                        "questions":[
                            {
                                "id":"AMEL_q1",
                                "options":[
                                    {"name":"X","value":"x"},
                                    {"name":"XX","value":"xx"},
                                    {"name":"XY","value":"xy"}
                                ],
                                "answer":"xx"
                            }
                        ]
                    },
                    "TAF9L":{
                        "questions":[
                            {
                                "id":"taf9l_q1",
                                "options":[
                                    {"name":"1 X chromosome","value":"onexchrom"},
                                    {"name":"2 X chromosomes","value":"twoxchrom"}
                                ],
                                "answer":"twoxchrom"
                            }
                        ]
                    },
                    "D18S978":{
                        "questions":[
                            {
                                "id":"D18S978_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S978_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "SRY":{
                        "questions":[
                            {
                                "id":"SRY_q1",
                                "options":[
                                    {"name":"Present","value":"present"},
                                    {"name":"Absent","value":"absent"}
                                ],
                                "answer":"absent"
                            }
                        ]
                    },
                    "D13S800":{
                        "questions":[
                            {
                                "id":"D13S800_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S800_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S390":{
                        "questions":[
                            {
                                "id":"D18S390_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S390_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D13S628":{
                        "questions":[
                            {
                                "id":"D13S628_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
                            {
                                "id":"D13S628_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1409":{
                        "questions":[
                            {
                                "id":"D21S1409_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1409_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S252":{
                        "questions":[
                            {
                                "id":"D13S252_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S252_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1442":{
                        "questions":[
                            {
                                "id":"D21S1442_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                        
                            {
                                "id":"D21S1442_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D18S819":{
                        "questions":[
                            {
                                "id":"D18S819_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S819_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    }
            
                },
                "final_conclusion":"Trisomy 18 female",
                "image":"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/rad_3.jpg"
            }
            
        },
        "practice_prenatalrad_4":{
            "data":{
                "markers":{
                    "DXS6803":{
                        "questions":[
                            {
                                "id":"DXS6803_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
                            {
                                "id":"DXS6803_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1435":{
                        "questions":[
                            {
                                "id":"D21S1435_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1435_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S11":{        
                        "questions":[
                            {
                                "id":"D21S11_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                        
                            {
                                "id":"D21S11_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"triallelic"
                            }
                        ]
                    },
                    "D21S1437":{
                        "questions":[
                            {
                                "id":"D21S1437_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            
                            {
                                "id":"D21S1437_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"triallelic"
                            }
                        ]
                    },
                    "D13S634":{
                        "questions":[
                            {
                                "id":"D13S634_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S634_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S535":{
                        "questions":[
                            {
                                "id":"D18S535_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S535_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "DXS1187":{
                        "questions":[
                            {
                                "id":"DXS1187_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"DXS1187_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1446":{
                        "questions":[
                            {
                                "id":"D21S1446_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1446_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"triallelic"
                            }
                        ]
                    },
                    "HPRT":{
                        "questions":[
                            {
                                "id":"HPRT_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"HPRT_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S386":{
                        "questions":[
                            {
                                "id":"D18S386_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S386_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S305":{
                        "questions":[
                            {
                                "id":"D13S305_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S305_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "AMEL":{
                        "questions":[
                            {
                                "id":"AMEL_q1",
                                "options":[
                                    {"name":"X","value":"x"},
                                    {"name":"XX","value":"xx"},
                                    {"name":"XY","value":"xy"}
                                ],
                                "answer":"xx"
                            }
                        ]
                    },
                    "TAF9L":{
                        "questions":[
                            {
                                "id":"taf9l_q1",
                                "options":[
                                    {"name":"1 X chromosome","value":"onexchrom"},
                                    {"name":"2 X chromosomes","value":"twoxchrom"}
                                ],
                                "answer":"twoxchrom"
                            }
                        ]
                    },
                    "D18S978":{
                        "questions":[
                            {
                                "id":"D18S978_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S978_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "SRY":{
                        "questions":[
                            {
                                "id":"SRY_q1",
                                "options":[
                                    {"name":"Present","value":"present"},
                                    {"name":"Absent","value":"absent"}
                                ],
                                "answer":"absent"
                            }
                        ]
                    },
                    "D13S800":{
                        "questions":[
                            {
                                "id":"D13S800_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
                            {
                                "id":"D13S800_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D18S390":{
                        "questions":[
                            {
                                "id":"D18S390_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S390_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S628":{
                        "questions":[
                            {
                                "id":"D13S628_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S628_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1409":{
                        "questions":[
                            {
                                "id":"D21S1409_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1409_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"triallelic"
                            }
                        ]
                    },
                    "D13S252":{
                        "questions":[
                            {
                                "id":"D13S252_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S252_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1442":{
                        "questions":[
                            {
                                "id":"D21S1442_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1442_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S819":{
                        "questions":[
                            {
                                "id":"D18S819_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S819_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    }
            
                },
                "final_conclusion":"Trisomy 21 female",
                "image":"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/rad_2.jpg"
            
            }
        },
        "practice_prenatalrad_5":{
            "data":{
                "markers":{
                    "DXS6803":{
                        "questions":[
                            {
                                "id":"DXS6803_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"DXS6803_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D21S1435":{
                        "questions":[
                            {
                                "id":"D21S1435_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            
                            {
                                "id":"D21S1435_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S11":{        
                        "questions":[
                            {
                                "id":"D21S11_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S11_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1437":{
                        "questions":[
                            {
                                "id":"D21S1437_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1437_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S634":{
                        "questions":[
                            {
                                "id":"D13S634_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S634_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S535":{
                        "questions":[
                            {
                                "id":"D18S535_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S535_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "DXS1187":{
                        "questions":[
                            {
                                "id":"DXS1187_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"DXS1187_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1446":{
                        "questions":[
                            {
                                "id":"D21S1446_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1446_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "HPRT":{
                        "questions":[
                            {
                                "id":"HPRT_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"chx"
                            },
    
                            {
                                "id":"HPRT_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S386":{
                        "questions":[
                            {
                                "id":"D18S386_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S386_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D13S305":{
                        "questions":[
                            {
                                "id":"D13S305_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S305_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "AMEL":{
                        "questions":[
                            {
                                "id":"AMEL_q1",
                                "options":[
                                    {"name":"X","value":"x"},
                                    {"name":"XX","value":"xx"},
                                    {"name":"XY","value":"xy"}
                                ],
                                "answer":"xx"
                            }
                        ]
                    },
                    "TAF9L":{
                        "questions":[
                            {
                                "id":"taf9l_q1",
                                "options":[
                                    {"name":"1 X chromosome","value":"onexchrom"},
                                    {"name":"2 X chromosomes","value":"twoxchrom"}
                                ],
                                "answer":"twoxchrom"
                            }
                        ]
                    },
                    "D18S978":{
                        "questions":[
                            {
                                "id":"D18S978_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
                            {
                                "id":"D18S978_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "SRY":{
                        "questions":[
                            {
                                "id":"SRY_q1",
                                "options":[
                                    {"name":"Present","value":"present"},
                                    {"name":"Absent","value":"absent"}
                                ],
                                "answer":"absent"
                            }
                        ]
                    },
                    "D13S800":{
                        "questions":[
                            {
                                "id":"D13S800_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
                            {
                                "id":"D13S800_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D18S390":{
                        "questions":[
                            {
                                "id":"D18S390_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
                            {
                                "id":"D18S390_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D13S628":{
                        "questions":[
                            {
                                "id":"D13S628_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S628_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1409":{
                        "questions":[
                            {
                                "id":"D21S1409_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
                            {
                                "id":"D21S1409_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"uninformative"
                            }
                        ]
                    },
                    "D13S252":{
                        "questions":[
                            {
                                "id":"D13S252_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch13"
                            },
    
                            {
                                "id":"D13S252_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D21S1442":{
                        "questions":[
                            {
                                "id":"D21S1442_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch21"
                            },
    
                            {
                                "id":"D21S1442_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    },
                    "D18S819":{
                        "questions":[
                            {
                                "id":"D18S819_q1",
                                "options":[
                                    {"name":"Ch13","value":"ch13"},
                                    {"name":"Ch18","value":"ch18"},
                                    {"name":"Ch21","value":"ch21"},
                                    {"name":"Ch X","value":"chx"},
                                    {"name":"Ch Y","value":"chy"}
                                ],
                                "answer":"ch18"
                            },
    
                            {
                                "id":"D18S819_q2",
                                "options":[
                                    {"name":"Uninformative","value":"uninformative"},
                                    {"name":"Diallelic","value":"diallelic"},
                                    {"name":"Triallelic","value":"triallelic"}
                                ],
                                "answer":"diallelic"
                            }
                        ]
                    }
            
                },
                "final_conclusion":"Normal female",
                "image":"https://qf-pcr-bucket.s3.ca-central-1.amazonaws.com/images/rad_8.jpg"
            
            }
        }
    };


    let putItems = [];
    Object.keys(data).map((id,index)=>{
        let putRequest = {"PutRequest":{"Item":{}}};
        let item = {};
        item.case_id = id;
        item.markers = data[id].data.markers;
        item.final_conclusion = data[id].data.final_conclusion;
        item.case_type = "prenatalrad";
        item.category = "practice"
        item.image = data[id].data.image;

        putRequest.PutRequest.Item = item;
        putItems.push(putRequest);
        console.log("putRequest",putRequest);
        console.log("putItems",putItems);

    });
    let batchWrite = {
        "RequestItems":{
            "qfpcr_data":putItems
        }
    }
    console.log("batch",batchWrite);
    await dynamodbClient.batchWrite(batchWrite).promise()
    .then((data) => {
        console.info('successfully update to dynamodb', data)
    })
    .catch((err) => {
        console.info('failed adding data dynamodb', err)
    });

};