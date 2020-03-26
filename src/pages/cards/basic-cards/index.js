import React from 'react'
import { Helmet } from 'react-helmet'
import Morph from 'components/quran/Morph'

class CardsBasicCards extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Al Quran" />
        <div className="air__utils__heading">
          <h5>
            <span className="mr-3">Al Quran</span>
          </h5>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header card-header-flex align-items-center">
                <div className="d-flex flex-column justify-content-center mr-auto">
                  <h5 className="mb-0">Al Fatihah</h5>
                </div>
              </div>
              <div className="card-body card-quran text-right">
                <Morph value="بِ" />
                <Morph value="سْمِ" />
                <Morph value=" " />
                <Morph value="ٱللَّهِ" />
                <Morph value=" " />
                <Morph value="ٱل" />
                <Morph value="رَّحْمَٰنِ" />
                <Morph value=" " />
                <Morph value="ٱل" />
                <Morph value="رَّحِيمِ" />
                <Morph value=" " />
                <Morph value="(١) " />
                <Morph value="ٱلْ" />
                <Morph value="حَمْدُ" />
                <Morph value=" " />
                <Morph value="لِ" />
                <Morph value="لَّهِ" />
                <Morph value=" " />
                <Morph value="رَبِّ" />
                <Morph value=" " />
                <Morph value="ٱلْ" />
                <Morph value="عَٰلَمِينَ" />
                <Morph value=" " />
                <Morph value="(٢) " />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardsBasicCards
