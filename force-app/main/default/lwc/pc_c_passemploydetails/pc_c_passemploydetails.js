import { LightningElement , api} from 'lwc';

export default class Pc_c_passemploydetails extends LightningElement {
    @api name;
    @api department;
    @api salary;
}