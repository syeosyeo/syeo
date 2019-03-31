import React from "react";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CircularProgress from "@material-ui/core/CircularProgress";
import FilterListIcon from "@material-ui/icons/FilterList";

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  gutterLeftHalf: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit / 2,
    }
  },
  gutterTop: {
    marginTop: theme.spacing.unit,
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit,
  },
  nunitoSansRegular: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
  },
  nunitoSansSemiBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 600,
  },
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
  },
  nunitoSansBlack: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 900,
  },
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
  },
  projectTitle: {
    fontSize: 16,
    color: "#373737",
  },
  projectDescription: {
    fontSize: 12,
    color: "#373737",
  },
  projectText: {
    fontSize: 14,
    color: "#373737",
  },
  tableColumn: {
    fontSize: 14,
    color: "#6a6a6a",
  },
  tableContent: {
    marginLeft: "21px",
    marginRight: "13px",
  },
  eachRow: {
    paddingTop: "29px",
    paddingBottom: "29px",
  },
  progressButton: {
    width: "103px",
    height: "42px",
    [theme.breakpoints.down('xs')]: {
      width: "90px",
      padding: "4px 0px",
    },
  },
  filterButton: {
    width: "100px",
    height: "36px",
    [theme.breakpoints.down('xs')]: {
      width: '36px',
      paddingLeft: theme.spacing.unit * 0,
      paddingRight: theme.spacing.unit * 0,
    }
  },
  filterListIcon: {
    width: "18px",
    height: "18px",
  },
  loadMoreButton: {
    fontSize: 16,
    backgroundColor: "#ededed",
    height: "62px",
    marginTop: "15px",
  },
  paper: {
    width: "100%",
    overflowX: 'auto',
  },
  circularProgress: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  noResults: {
    fontSize: 50,
    color: "#6a6a6a",
    marginTop: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down('sm')]: {
      marginTop: "15px",
      marginBottom: "15px",
      fontSize: 30,
    }
  },
  filter: {
    color: '#6a6a6a',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  }
});

class ProjectTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      isFetched: false,
      progress: "Ongoing",
      secEquity: false,
      secRev: false,
      secEstate: false,
      secFund: false,
      secBond: false,
      secOthers: false,
      regD506b: false,
      regD506c: false,
      regS: false,
      regCF: false,
      regA: false,
      regOthers: false,
      protocol: "",
      count: 0,
      page: 1,
      anchorEl: null,
      filterMenuOpen: false,
    };
  }

  componentDidMount = () => {
    this.fetchProjects();
  }

  handleProgressClicked = (event, progress) => {
    this.setState({
      isLoaded: false,
      progress: [progress],
      page: 1
    }, () => {
      this.fetchProjects();
    });
  }

  filterReset = () => {
    this.setState({
      secEquity: false,
      secRev: false,
      secEstate: false,
      secFund: false,
      secBond: false,
      secOthers: false,
      regD506b: false,
      regD506c: false,
      regS: false,
      regCF: false,
      regA: false,
      regOthers: false,
      count: 0,
      page: 1,
    }, () => {
      this.fetchProjects();
    });
  };

  filterClickOpen = event => {
    this.setState({anchorEl: event.currentTarget});
  }

  filterClickClose = () => {
    this.setState({anchorEl: null});
  }

  handleFilterChange = regName => event => {
    this.setState({
      [regName]: !this.state[regName],
      isLoaded: true,
      page: 1,
    }, () => {
      this.fetchProjects();
    });
  };

  fetchProjects = () => {
    const { pageSize } = this.props;
    const { progress, secEquity, secRev, secEstate, secFund, secBond, secOthers, regD506b, regD506c, regS, regCF, regA, regOthers, protocol, page, projects } = this.state;
    const url_query = "?q=" +
    "&progress=" + progress +
    (secEquity ? "&secEquity=true" : "") + (secRev ? "&secRev=true" : "") + (secEstate ? "&secEstate=true" : "") + (secFund ? "&secFund=true" : "") + (secBond ? "&secBond=true" : "") + (secOthers ? "&secOthers=true" : "") +
    (regD506b ? "&regD506b=true" : "") + (regD506c ? "&regD506c=true" : "") + (regS ? "&regS=true" : "") + (regCF ? "&regCF=true" : "") + (regA ? "&regA=true" : "") + (regOthers ? "&regOthers=true": "") + 
    "&protocol=" + protocol +
    "&page_size=" + pageSize + 
    "&page=" + page;

    this.setState({isFetched: false}, () => {
      $.ajax({
        method: "GET",
        url: "/api/projects/" + url_query,
      }).done(data => {
        this.setState({
          isLoaded: true,
          isFetched: true,
          count: data.count,
          page: data.page + 1,
          projects: data.page == 1 ? data.results : projects.concat(data.results),
        });
      }).fail(error => {
        this.setState({
          error: error.responseJSON.detail,
          isLoaded: true,
          isFetched: true,
        });
      });
    });
  };

  render() {
    const { classes, language, pageSize } = this.props;
    const { isLoaded, isFetched, progress, count, page, projects, anchorEl } = this.state;
    let id = 0;

    return (
      <Grid container>
        <Grid container justify="space-between" alignItems="flex-end" className={classes.gutterBottom}>
          <ToggleButtonGroup value={progress} exclusive onChange={this.handleProgressClicked}>
            <ToggleButton id="table-ongoing" value="Ongoing" className={classes.progressButton}>
              Ongoing
            </ToggleButton>
            <ToggleButton id="table-finished" value="Finished" className={classes.progressButton}>
              Finished
            </ToggleButton>
            <ToggleButton id="table-announced" value="Announced" className={classes.progressButton}>
              Announced
            </ToggleButton>
          </ToggleButtonGroup>
          <Grid>
            {/* <Button
              onClick = {this.filterReset}
              variant="outlined"
              className={classes.filterButton}
            >
              Reset
            </Button> */}
            <Button id="table-filter"
              onClick={this.filterClickOpen}
              variant="outlined"
              className={classes.filterButton}
            >
              <Grid container alignItems="center" justify="center">
                <Typography className={classes.filter}>Filter</Typography>
                <FilterListIcon className={classNames(classes.filterListIcon, classes.gutterLeftHalf)}/>
              </Grid>
            </Button>
            <Menu
              id="filter-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.filterClickClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 7.5,
                },
              }}
            >
              <MenuItem disabled={true}>
                <Typography className={classes.nunitoSansSemiBold}>Regulations</Typography>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-regulation-regD506b" control={<Checkbox color="primary" checked={this.state.regD506b} onChange={this.handleFilterChange('regD506b')} />} label="Regulation D(506b)" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-regulation-regD506c" control={<Checkbox color="primary" checked={this.state.regD506c} onChange={this.handleFilterChange('regD506c')} />} label="Regulation D(506c)" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-regulation-regA" control={<Checkbox color="primary" checked={this.state.regA} onChange={this.handleFilterChange('regA')} />} label="Regulation A+" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-regulation-regCF" control={<Checkbox color="primary" checked={this.state.regCF} onChange={this.handleFilterChange('regCF')} />} label="Regulation CF" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-regulation-regS" control={<Checkbox color="primary" checked={this.state.regS} onChange={this.handleFilterChange('regS')} />} label="Regulation S" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-regulation-regOthers" control={<Checkbox color="primary" checked={this.state.regOthers} onChange={this.handleFilterChange('regOthers')} />} label="Others" />
                  </FormGroup>
                </FormControl>
              </MenuItem>

              <MenuItem disabled={true}>
                <Typography className={classes.nunitoSansSemiBold}>Security types</Typography>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-securityType-secEquity" control={<Checkbox color="primary" checked={this.state.secEquity} onChange={this.handleFilterChange('secEquity')} />} label="Equity" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-securityType-secRev" control={<Checkbox color="primary" checked={this.state.secRev} onChange={this.handleFilterChange('secRev')} />} label="Revenue sharing" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-securityType-secEstate" control={<Checkbox color="primary" checked={this.state.secEstate} onChange={this.handleFilterChange('secEstate')} />} label="Real estate" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-securityType-secFund" control={<Checkbox color="primary" checked={this.state.secFund} onChange={this.handleFilterChange('secFund')} />} label="Fund" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-securityType-secBond" control={<Checkbox color="primary" checked={this.state.secBond} onChange={this.handleFilterChange('secBond')} />} label="Bond" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl component="fieldset" fullWidth={true} margin="none">
                  <FormGroup>
                    <FormControlLabel id="filter-securityType-secOthers" control={<Checkbox color="primary" checked={this.state.secOthers} onChange={this.handleFilterChange('secOthers')} />} label="Others" />
                  </FormGroup>
                </FormControl>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Paper elevation={0} className={classes.paper}>
          <Grid className={classes.tableContent}>
            <Table>
              <TableHead border="">
                <TableRow>
                  <TableCell padding="none" className={classNames(classes.nunitoSansRegular, classes.tableColumn, classes.eachRow)} >Project/Description</TableCell>
                  <TableCell align="left" className={classNames(classes.nunitoSansRegular, classes.tableColumn)}>
                    Security type
                  </TableCell>
                  <TableCell align="left" className={classNames(classes.nunitoSansRegular, classes.tableColumn)}>Regulation</TableCell>
                  <TableCell align="left" className={classNames(classes.nunitoSansRegular, classes.tableColumn)}>status</TableCell>
                  <TableCell align="left" className={classNames(classes.nunitoSansRegular, classes.tableColumn)}>Protocol</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoaded && projects.map(project => {
                  return (
                    <TableRow key={project.id}>
                      <TableCell component="th" scope="row" padding="none" className={classes.eachRow}>
                        <Typography className={classNames(classes.nunitoSansSemiBold, classes.projectTitle)}>{project.name}</Typography>
                        {/* English */}
                        {language=="English" && (
                          <Typography className={classNames(classes.nunitoSansRegular, classes.projectDescription)}>{project.description}</Typography>
                        )} 
                        {/* Korean */}
                        {language=="Korean" && (project.description_kr == null || project.description_kr == "") && (
                          <Typography className={classNames(classes.nunitoSansRegular, classes.projectDescription)}>{project.description}</Typography>
                        )}{language=="Korean" && project.description_kr != null && project.description_kr != "" && (
                          <Typography className={classNames(classes.spoqaHanSans, classes.projectDescription)}>{project.description_kr}</Typography>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {project.security_type.map(sectype => {
                          return (<Typography key={sectype.id} className={classNames(classes.nunitoSansRegular, classes.projectText)}>{sectype.name}</Typography>)
                        })}
                      </TableCell>
                      <TableCell align="left">
                        {project.regulation.map(reg => {
                          return (<Typography key={reg.id} className={classNames(classes.nunitoSansRegular, classes.projectText)}>{reg.name}</Typography>)
                        })}
                      </TableCell>
                      <TableCell align="left">
                      {/* English */}
                      {language == "English" && (
                        <Typography className={classNames(classes.nunitoSansRegular, classes.projectText)}>{project.status}</Typography>
                      )}
                      {/* Korean */}
                      {language=="Korean" && (project.description_kr == null || project.status_kr == "") && (
                        <Typography className={classNames(classes.nunitoSansRegular, classes.projectText)}>{project.status}</Typography>
                      )}{language=="Korean" && project.description_kr != null && project.status_kr != "" && (
                        <Typography className={classNames(classes.spoqaHanSans, classes.projectText)}>{project.status_kr}</Typography>
                      )}
                      </TableCell>
                      <TableCell align="left">
                        <Typography className={classNames(classes.nunitoSansRegular, classes.projectText)}>{project.protocol.name}</Typography>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Grid>
        </Paper>

        {!isFetched && (
          <Grid container justify="center">
            <CircularProgress className={classes.circularProgress}/>
          </Grid>
        )}
        {count==0 && isFetched && (
          <Grid container justify="center">
            <Typography className={classNames(classes.nunitoSansBold, classes.noResults)}>No results :(</Typography>
          </Grid>
        )}
        {count > (page-1)*pageSize && isFetched && !(window.location.pathname === "/home/") && (
          <Button id="table-loadmore"
            onClick={this.fetchProjects}
            className={classNames(classes.nunitoSansSemiBold, classes.loadMoreButton)}
            fullWidth={true}
          >
            Load More
          </Button>
        )}
        {isFetched && (window.location.pathname === "/home/") && (
          <Button id="table-seeall"
            href="/sto_radar/"
            className={classNames(classes.nunitoSansSemiBold, classes.loadMoreButton)}
            fullWidth={true}
          >
            See All
          </Button>
        )}
      </Grid>
    );
  }
}

ProjectTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ProjectTable);