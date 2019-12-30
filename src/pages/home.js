import React from 'react';
import {
  Avatar,
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Button,
  Bullseye,
  ButtonVariant,
  Card,
  CardBody,
  CardHeader,
  DataList,
  DataListCell,
  DataListContent,
  DataListItemRow,
  DataListItem,
  DataListItemCells,
  DataListToggle,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  Grid,
  GridItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  Pagination,
  PaginationVariant,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { Table, TableHeader, TableBody, TableVariant, sortable, SortByDirection, expandable, cellWidth, headerCol } from '@patternfly/react-table';
import axios from 'axios';

import ReactCompareImage from 'react-compare-image';

import xs from '@assets/images/pfbg_576.jpg';
import xs2x from '@assets/images/pfbg_576@2x.jpg';
import sm from '@assets/images/pfbg_768.jpg';
import sm2x from '@assets/images/pfbg_768@2x.jpg';
import lg from '@assets/images/pfbg_2000.jpg';
import filter from '@assets/images/background-filter.svg';

const cStyle={ 
  textAlign: 'center'
};

const divStyle = {
  width: '75%',
};


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expanded: [],
        treemapdata: [],
      columns: ['Word','Count'],
      rows: [],
      sortBy: {},
        isOpen0: false,
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        page: 1,
        perPage: 20
      };
    }

    onToggle0 = isOpen0 => {
        this.setState({ isOpen0 });
      };

    onToggle1 = isOpen1 => {
      this.setState({ isOpen1 });
    };

    onToggle2 = isOpen2 => {
      this.setState({ isOpen2 });
    };

    onToggle3 = isOpen3 => {
      this.setState({ isOpen3 });
    };

    onSelect0 = event => {
      this.setState(prevState => ({
        isOpen0: !prevState.isOpen0
      }));
    };

    onSelect1 = event => {
      this.setState(prevState => ({
        isOpen1: !prevState.isOpen1
      }));
    };

    onSelect2 = event => {
      this.setState(prevState => ({
        isOpen2: !prevState.isOpen2
      }));
    };

    onSelect3 = event => {
      this.setState(prevState => ({
        isOpen3: !prevState.isOpen3
      }));
    };

    onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }


    render() {
      const toggle = id => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));

    };
    return (
      <React.Fragment>
          <PageSection>
            <Bullseye>
            <div style={divStyle}>
              <ReactCompareImage leftImage="http://localhost:8000/images/pia21455.jpg" 
                rightImage="http://localhost:8000/images/pia11705.jpg" />
            </div>
          </Bullseye>
          </PageSection>
      </React.Fragment>
    );
  }
}
export default Home;
