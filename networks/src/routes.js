import Home from './app/Home';
import IPAddressRange from './app/IPAddressRange';
import NetworkDiagram from './app/NetworkDiagram';
import NetworkDeviceInformation from './app/NetworkDeviceInformation';
import PortsProtocols from './app/PortsProtocol';
import SecControls from './app/SecControls';
import SecStrengthsWeak from './app/SecStrengthsWeak';
import NetworkRoadmap from './app/NetworkRoadmap';
import LocationDescriptions from './app/LocationDescriptions';

const ROUTES = [
	{ path: '/ipaddressrange', component: IPAddressRange},
	{ path: '/networkdiagram', component: NetworkDiagram},
	{ path: '/networkdeviceinformation', component: NetworkDeviceInformation },
	{ path: '/portsprotocols', component: PortsProtocols},
	{ path: '/seccontrols', component: SecControls},
	{ path: '/strengthsweaknesses', component: SecStrengthsWeak},
	{ path: '/networkroadmap', component: NetworkRoadmap },
	{ path: '/locationdescriptions', component: LocationDescriptions }, 
	{ path: '/',	component: Home	}
];
export default ROUTES;