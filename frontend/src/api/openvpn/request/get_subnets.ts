import { api } from 'boot/axios';
import API from 'api/openvpn/api';
import Subnet from 'api/data/subnet';

export interface IGetSubnetsResponse extends Response {
  subnets: Subnet[];
}

export default function getSubnets() {
  return api.get<IGetSubnetsResponse>(API.SUBNETS);
}
