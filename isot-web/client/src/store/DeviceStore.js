import {makeAutoObservable} from "mobx";
import {type} from "@testing-library/user-event/dist/type";

export default class DeviceStore
{
    constructor()
    {
        this._types =
            [
                {id:1, name:'Входящие'},
                {id:2, name:'Исходящие'},
                {id:3, name:'Корзина'},
                {id:4, name:'Спам'},
            ]
        this._brands =
            [
                {id:1, name:'Создать'},
                {id:2, name:'Ответить'},
                {id:3, name:'Переслать'},
                {id:4, name:'Удалить'},
            ]
        this._devices =
            [
                {id:1, name:'12 pro', price: 10000, rating:0, img:'0f374242-47fc-4cf8-abf1-755b8016389b.jpg'},
                {id:2, name:'M10', price: 1000, rating:0, img:'e02c2466-7d32-4a0b-8f6f-06f3950d7043.jpg'},
                {id:8, name:'13 pro', price: 40000, rating:0, img:'aac4cfd0-0a75-4c3b-83bf-e10fe0f60078.jpg'},
            ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type)
    {
        this._selectedType = type
    }
    setSelectedBrand(brand)
    {
        this._selectedBrand = brand
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
    get selectedType()
    {
        return this._selectedType
    }
    get selectedBrand()
    {
        return this._selectedBrand
    }
}