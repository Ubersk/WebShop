import {makeAutoObservable} from "mobx";

export default class DeviceStore
{
    constructor()
    {
        this._types =
            [
                {id:1, name:'Смартфоны'},
                {id:2, name:'Холодильники'}
            ]
        this._brands =
            [
                {id:1, name:'Samsung'},
                {id:2, name:'Apple'},
            ]
        this._devices =
            [
                {id:1, name:'12 pro', price: 10000, rating:0, img:'0f374242-47fc-4cf8-abf1-755b8016389b.jpg'},
                {id:2, name:'M10', price: 1000, rating:0, img:'e02c2466-7d32-4a0b-8f6f-06f3950d7043.jpg'},
                {id:8, name:'13 pro', price: 40000, rating:0, img:'aac4cfd0-0a75-4c3b-83bf-e10fe0f60078.jpg'},
            ]
        makeAutoObservable(this)
    }

    setTypes(types)
    {
        this._types = types
    }

    setBrands(brands)
    {
        this._brands = brands
    }
    setDevices(devices)
    {
        this._devices = devices
    }

    get types()
    {
        return this ._types
    }
    get brands()
    {
        return this ._brands
    }

    get devices()
    {
        return this._devices
    }
}