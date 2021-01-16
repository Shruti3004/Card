import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable'
import "react-resizable/css/styles.css";
import './coverimage.css'

export default class Drag extends Component {
    render() {
        const { data } = this.props;
        // console.log(data);
        let details = data.text.map((text, key) => {
            return(
                <div key={key}>
                    <Draggable 
                        axis="both"
                        handle=".handle"
                    >
                        <ResizableBox
                            className="box"
                            width={100}
                            height={100}
                            minConstraints={[50,50]}
                            maxConstraints={[Infinity,Infinity]}
                            style={{position: "absolute", top: 0, cursor:"grab", zIndex: 10}}
                        >
                            <div 
                                className="handle"
                                style={{fontSize: `${data.font[key]}px`,
                                        color: `${data.color[key]}`,
                                        zIndex: 10
                                        // fontWeight: `${data.bold}`,
                                        // fontStyle: `${data.italics}`,
                                        // textDecoration: `${data.underline}`,
                                        // textAlign:`${data.align}`
                                    }}
                                >
                                {text}
                            </div>
                        </ResizableBox>
                    </Draggable>
                </div>
            )
        });

        return (
            <div>
                {details}
            </div>
        )
    }
}


// export default class Drag extends Component {
//     render() {
//         const { data } = this.props;
 
//         return (
//             <div>
//                 <Draggable 
//                     axis="both"
//                     handle=".handle"
//                 >
//                     <ResizableBox
//                         className="box"
//                         width={100}
//                         height={100}
//                         minConstraints={[50,50]}
//                         maxConstraints={[Infinity,Infinity]}
//                         style={{position: "absolute", top: 0, cursor:"grab"}}
//                     >
//                         <div 
//                             className="handle"
//                             style={{fontSize: `${data.font}px`,
//                                     color: `${data.color}`,
//                                     fontWeight: `${data.bold}`,
//                                     fontStyle: `${data.italics}`,
//                                     textDecoration: `${data.underline}`,
//                                     textAlign:`${data.align}`
//                                 }}
//                         >
//                             {data.text}
//                         </div>
//                     </ResizableBox>
//                 </Draggable>
//             </div> 
//         )
//     }
// }


