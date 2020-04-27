import React, { Component } from "react";
import {Split, SplitItem } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';

class JpegStats extends Component {
  constructor(props) {
    super(props);
    var image_json = require('../srv_json/'+this.props.image+'.json');
    var columns = [];
    var rows = [];

    for(var key in image_json) {
      rows.push([key, image_json[key]])
    }

    columns.push("EXIF key")
    columns.push("XIF value")
    console.log([columns,rows]);
    this.state = {
      image_data: [columns, rows]
    }
  };

  render() {
    return(
        <div>
          <Split gutter="md">
            <SplitItem>
              <img src={require('../srv_images/'+this.props.image+'.jpg')} height="200" width="200"/>
            </SplitItem>
            <SplitItem>
               <Table
                  aria-label="Compact Table with borderless rows"
                  variant={TableVariant.compact}
                  borders={false}
                  cells={this.state.image_data[0]}
                  rows={this.state.image_data[1]}
               >
                 <TableHeader />
                 <TableBody />
               </Table>
            </SplitItem>
          </Split>
        </div>
    
  )
 }
}
export default JpegStats;
