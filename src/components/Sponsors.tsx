import bakerislandLogo from '../images/bakerisland-logo.png'
import midlBanner from '../images/midl_baking_banner.png'
import { Col, Row } from 'react-bootstrap';

function Sponsors() {
  return (
    <div className='logos'>
      <p>Sponsors:</p>
      <Row>
        <Col className='text-center'>
          <a href="https://midl.dev/tezos" target="_blank"><img src={midlBanner} alt="MIDL.dev" className="shadow p-3 mb-5 bg-body rounded"></img></a>
        </Col>
        <Col className='text-center'>
          <a href="https://tzstats.com/tz1LVqmufjrmV67vNmZWXRDPMwSCh7mLBnS3"><img src={bakerislandLogo} alt="Bakerisland" className="shadow p-3 mb-5 bg-body rounded"></img></a>
        </Col>
      </Row>
    </div>
  )
}

export default Sponsors;
