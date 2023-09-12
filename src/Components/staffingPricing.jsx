import * as React from 'react';
import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function StaffingPricing() { 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return ( 
       <div style={{backgroundColor:'black', color:'white',display:'flex', flex:1, height:'100%', padding:15,flexDirection:'column'}}> 
            <div style={{color: 'white', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Staffing & Pricing</div>
            <div style={{color: 'rgba(255, 255, 255, 0.60)', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>The measure of success and quality of design is not just what we deliver.</div>
            <div style={{width: '95%', height: '100%', border: '0.50px rgba(255, 255, 255, 0.30) solid',marginTop:30, padding:25}}>
              <div style={{color: 'white', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Summary</div>
              <div style={{flexDirection:'row', display:'flex', justifyContent:'space-between', paddingTop: 20}}>
                  <div style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                  <div>
                    <span style={styles.summaryValue}>$110,000,000<br/></span>
                    <span style={styles.summaryLable}>Total Engagement Fees</span></div>
                  </div>
                  <div style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                  <div>
                    <span style={styles.summaryValue}>$$<br/></span>
                    <span style={styles.summaryLable}>Cost</span></div>
                  </div>
                  <div style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                  <div>
                    <span style={styles.summaryValue}>$$<br/></span>
                    <span style={styles.summaryLable}>Margin</span></div>
                  </div>
                  <div style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                  <div>
                    <span style={styles.summaryValue}>$$$<br/></span>
                    <span style={styles.summaryLable}>Margin%</span></div>
                  </div>
                  <div style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                  <div>
                    <span style={styles.summaryValue}>$$<br/></span>
                    <span style={styles.summaryLable}>Effective Discount %</span></div>
                  </div>
              </div>
            </div>

            <div style={{width: '95%', height: '100%', border: '0.50px rgba(255, 255, 255, 0.30) solid',marginTop:30, padding:25}}>
              <div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start'}}>
                  <div style={{justifyContent:'center', alignItems:'center'}}>
                  <div>
                    <span style={styles.summaryValue}>$$<br/></span>
                    <span style={styles.summaryLable}>PMO</span></div>
                  </div>
                  <div style={{justifyContent:'center', alignItems:'center', paddingLeft:25}}>
                  <div>
                    <span style={styles.summaryValue}>$$<br/></span>
                    <span style={styles.summaryLable}>Front-End UX/UI Design</span></div>
                  </div>
                  <div style={{justifyContent:'center', alignItems:'center',paddingLeft:25}}>
                  <div>
                    <span style={styles.summaryValue}>$$<br/></span>
                    <span style={styles.summaryLable}>Leadership time</span></div>
                  </div>
                  <div style={{justifyContent:'center', alignItems:'center',paddingLeft:25}}>
                  <div>
                    <span style={styles.summaryValue}>$$$<br/></span>
                    <span style={styles.summaryLable}>Leadership Investment</span></div>
                  </div>
                  
              </div>
            </div>
            {/* <Box sx={{ width: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box> */}
      </div> 
    ); 
} 


const styles = {
  summaryValue : {
    color: 'white', 
    fontSize: 32, 
    fontFamily: 'Open Sans', 
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  summaryLable : {
    color: 'rgba(255, 255, 255, 0.60)', 
    fontSize: 12, 
    fontFamily: 'Open Sans', 
    fontWeight: '600', 
    wordWrap: 'break-word'
  },
  
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default StaffingPricing; 