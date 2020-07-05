import React from 'react';
import style from './InitialData.module.css';
import {useFormik} from 'formik';
import {calculateWorkArea} from './calculateWorkArea';

export const InitialData = ({}) => {
    const formik = useFormik({
        initialValues: {
            bottomLength: '',
            bottomWidth: '',
            horizonLength: '',
            horizonWidth: '',
            overlap: '1,5',
            depth: '',
            slopeAngle: '',
            slopeRatio: '',
            depthSelect: '',
            slopeAngleSelect: '',
            slopeRatioSelect: '',
        },
        onSubmit: values => {
            calculateWorkArea(values)
        },
    });

    return (<div className={style.commonDataForm}>
        <form onSubmit={formik.handleSubmit}>
            <div className={style.commonDataForm__fullForm}>
                <div className={style.commonDataForm__imageDataForm}>
                    commonDataForm__imageDataForm
                </div>
                <div className={style.commonDataForm__initialDataForm}>
                    <div>
                        {'Длина по горизонту:'}
                        <input
                            id='horizonLength'
                            name='horizonLength'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.horizonLength}
                        />
                        {'м'}
                    </div>
                    <div>
                        {'Ширина по горизонту:'}
                        <input
                            id='horizonWidth'
                            name='horizonWidth'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.horizonWidth}
                        />
                        {'м'}
                    </div>
                    <div>
                    {'Длина по дну:'}
                    <input
                        id='bottomLength'
                        name='bottomLength'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.bottomLength}
                    />
                        {'м'}
                    </div>
                    <div>
                    {'Ширина по дну:'}
                    <input
                        id='bottomWidth'
                        name='bottomWidth'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.bottomWidth}
                    />
                        {'м'}
                    </div>
                    <div>
                    {'Напуск для анкерной траншеи:'}
                    <input
                        id='overlap'
                        name='overlap'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.overlap}
                    />
                        {'м'}
                    </div>
                    <div>
                    {'Глубина:'}
                    <input
                        id='depth'
                        name='depth'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.depth}
                    />
                        {'м'}
                    <input
                        id='depthSelect'
                        name='depthSelect'
                        type='checkbox'
                        onChange={formik.handleChange}
                        value={formik.values.depthSelect}
                    />
                    </div>
                    <div>
                    {'Угол заложения откосов:'}
                    <input
                        id='slopeAngle'
                        name='slopeAngle'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.slopeAngle}
                    />
                        {'°'}
                    <input
                        id='slopeAngleSelect'
                        name='slopeAngleSelect'
                        type='checkbox'
                        onChange={formik.handleChange}
                        value={formik.values.slopeAngleSelect}
                    />
                    </div>
                    <div>
                    {'Уклон откосов:'}
                    <input
                        id='slopeRatio'
                        name='slopeRatio'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.slopeRatio}
                    />
                    <input
                        id='slopeRatioSelect'
                        name='slopeRatioSelect'
                        type='checkbox'
                        onChange={formik.handleChange}
                        value={formik.values.slopeRatioSelect}
                    />
                    </div>
                </div>
            </div>
            <div className={style.commonDataForm__submitButton}>
                <button type='submit'>Расчет площади сварочных работ</button>
            </div>
        </form>
    </div>)
}

