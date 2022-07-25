import React from 'react';
import { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDistrictAction, setProvincesAction } from '../../../Store/Actions/hook';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../Contexts/GlobalContext';

export default function BaiTapUseHook() {
    const dispatch = useDispatch();
    const hookState = useSelector((state) => state.hookReducer);
    const [state, setState] = useState({
        provinces: '',
        districts: '',
    })

    const [fillerDistricts, setFillerDistricts] = useState([]);
    const [globalState] = useContext((GlobalContext));

    useEffect(() => {
        // console.log(hookState)
        fetchProvinces();
        fetchDistricts();
    }, [])

    useEffect(() => {
        const data = hookState.districts.filter(ele => ele.provinceId === +state.provinces)
        // console.log("province");
        setFillerDistricts(data)
    }, [state.provinces])

    const fetchProvinces = () => {
        if (hookState.provinces.length > 0) {
            return;
        }
        dispatch(setProvincesAction())
    }

    const fetchDistricts = () => {
        if (hookState.districts.length > 0) {
            return;
        }

        dispatch(setDistrictAction())
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(e.target.value);
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <form className="d-flex mx-auto w-50">
            <div className="form-group mr-2 mb-0" style={{ minWidth: '40%' }}>
                <label>Thành Phố</label>
                <select name='provinces' onChange={handleChange} className="form-control">
                    <option>Chọn thành phố</option>
                    {
                        hookState.provinces.map(ele => {
                            return <option key={ele.id} value={ele.id}>{ele.name}</option>
                        })
                    }
                </select>
            </div>
            <div className="form-group mr-2 mb-0" style={{ minWidth: '40%' }}>
                <label>Quận</label>
                <select name='districts' onChange={handleChange} className="form-control">
                    <option>Chọn quận</option>
                    {
                        fillerDistricts.map(ele => {
                            return <option key={ele.id} value={ele.id}>{ele.name}</option>
                        })
                    }
                </select>
            </div>
            <div className="form-group">
                <label className="d-block">&nbsp;</label>
                <button className="btn btn-info">SEARCH</button>
            </div>
        </form>
    );
}