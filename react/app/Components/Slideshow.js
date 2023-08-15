'use client'

import { useState } from "react"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

 

  return (
    <section className="py-5 self-center flex items-center flex-col md:w-[75%]">
      <div className="navigation-wrapper max-w-[500px]">
        <div id="keen" ref={sliderRef} className="keen-slider">
          <Image id="1" src={'/slides/1.jpg'} width={500} height={500} className={` keen-slider__slide number-slide1`}/>
          <Image id="2" src={'/slides/2.jpg'} width={500} height={500} className={` keen-slider__slide number-slide1`}/>
          <Image id="3" src={'/slides/3.jpg'} width={500} height={500} className="keen-slider__slide number-slide1"/>
          <Image id="4" src={'/slides/4.jpg'} width={500} height={500} className="keen-slider__slide number-slide1"/>
          <Image id="5" src={'/slides/5.jpg'} width={500} height={500} className="keen-slider__slide number-slide1"/>
          <Image id="6" src={'/slides/6.jpg'} width={500} height={500} className="keen-slider__slide number-slide1"/>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
            className="bg-black"
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
            right
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </section>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
