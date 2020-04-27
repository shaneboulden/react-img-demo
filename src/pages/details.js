import React from 'react';
import {
  Avatar,
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListCheck,
  Dropdown,
  DropdownItem,                
  DropdownPosition,            
  DropdownToggle,              
  DropdownSeparator,           
  KebabToggle,                 
  Page,
  PageHeader,
  PageSection,                 
  PageSectionVariants,
  PageSidebar,
  Pagination,
  PaginationVariant,
  Split,
  SplitItem,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,                
  ToolbarItem
} from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';

import { GlobeAsiaIcon } from '@patternfly/react-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import JpegStats from '../../components/JpegStats';

class Details extends React.Component {
  constructor(props) {
    super(props);

    const images = [
        'pia00122',
        'pia00123',
        'pia11705',
        'pia18033',
        'pia21455',
        'pia22465'
    ];
    let data_array = {};
    images.forEach(image => {
      data_array[image]= [];
      data_array[image][0] = [];
      data_array[image][1] = [];
    })

    this.state = {
      images: images,
      expanded: [],
      opened: [],
      dataitems: [],
      modified_times: {},
      data_array: data_array,
      page: 1,
      perPage: 10
    };
  }

  render() {

    const toggle = id => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
    };

    const open = id => {
      const opened = this.state.opened;
      const index = opened.indexOf(id);
      const newOpened =
        index >= 0 ? [...opened.slice(0, index), ...opened.slice(index + 1, opened.length)] : [...opened, id];
      this.setState(() => ({ opened: newOpened }));
    };

    return(
      <React.Fragment>
        <DataList aria-label="Expandable data list example" >
          { this.state.images.map((image,index) => {
            return (
              <DataListItem aria-labelledby={`ex-item${index}`} key={index} isExpanded={this.state.expanded.includes(`ex-toggle${index}`)}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle(`ex-toggle${index}`)}
                isExpanded={this.state.expanded.includes(`ex-toggle${index}`)}
                id={`ex-toggle${index}`}
                aria-controls={`ex-expand${index}`}
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                    <GlobeAsiaIcon color="#0066cc" />
                  </DataListCell>,
                  <DataListCell key="primary content">
                    <div id={`ex-item${index}`}>{image}</div>
                  </DataListCell>,
                ]}
              />,

              <DataListAction
                aria-labelledby="check-action-item1 check-action-action1"
                id="check-action-action1"
                aria-label="Actions"
              >
                <Dropdown
                  isPlain
                  position={DropdownPosition.right}
                  isOpen={this.state.opened.includes(`ex-dropdown${index}`)}
                  id={`ex-dropdown${index}`}
                  toggle={<KebabToggle onToggle={() => open(`ex-dropdown${index}`)} />}

                  dropdownItems={[
                    <DropdownItem key="edit" href onClick={(e) => {e.preventDefault(); this.linkToEdit(licence)}}>
                      Edit
                    </DropdownItem>,
                    <DropdownItem key="delete" href onClick={(e) => {e.preventDefault(); this.linkToDelete(licence)}}>
                      Delete
                    </DropdownItem>
                  ]}
                />
            </DataListAction>
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id={`ex-expand${index}`}
              isHidden={!this.state.expanded.includes(`ex-toggle${index}`)}
            >
              <JpegStats image={image}/>
            </DataListContent>
          </DataListItem>
            )
          })}
        </DataList>
      </React.Fragment>
    )
  };
};
export default Details;
