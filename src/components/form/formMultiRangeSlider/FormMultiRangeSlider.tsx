import { useCallback, useEffect, useState, useRef } from "react";
import "./FormMultiRangeSliderStyles.scss";
interface IMultiRangeSliderProps {
    min: number
    max: number
    onChange: ({ min, max }: { min: number, max: number }) => void

}
const FormMultiRangeSlider = ({ min, max, onChange }: IMultiRangeSliderProps) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
        const value = parseInt(event.target.value);

        if (isMin) {
            // Prevent the min value from being greater than the max value
            if (value < min) {
                setMinVal(min);
            } else {
                setMinVal(value)
            }
        } else {
            // Prevent the max value from being smaller than the min value
            if (value > max) {
                setMaxVal(max);
            } else {
                setMaxVal(value)
            }
        }
    };

    return (
        <div className="form_multi_range_slider_container">

            <div className="">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    ref={minValRef}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        setMinVal(value);
                        event.target.value = value.toString();
                    }}
                    className={`thumb thumb--zindex-3 ${minVal > max - 100 ? "thumb--zindex-5" : ""}`}

                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    ref={maxValRef}
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, minVal + 1);
                        setMaxVal(value);
                        event.target.value = value.toString();
                    }}
                    className="thumb thumb--zindex-4"
                />

                <div className="slider">
                    <div className="slider__track" />
                    <div ref={range} className="slider__range" />
                </div>
            </div>
            <div className="form_multi_range_slider_input_container">
              
                <input
                    type="number"
                    className="form_multi_range_slider_input"
                    value={minVal}
                    max={maxVal}
                    onChange={(e) => handleInputChange(e, true)}
                    inputMode="numeric"
                    pattern="[+-]?\d*\.?\d+"
                />
                <input
                    type="number"
                    className="form_multi_range_slider_input"
                    value={maxVal}
                    min={minVal}
                    onChange={(e) => handleInputChange(e, false)}
                    inputMode="numeric"
                    pattern="[+-]?\d*\.?\d+"
                />
            </div>

        </div>
    );
};

export default FormMultiRangeSlider;
