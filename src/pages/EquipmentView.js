import React from 'react'
import BlankSpace from '../components/BlankSpace'

export default function EquipmentView() {
  const EquipmentData = [
    {id: 1,
      title: 'Analog',
      list: ['Sontec', 'Neumann', 'Focusrite', 'Manley', 'Neve', 'Meyer Sound', 'Dangerous Music', 'Rupert Neve Designs'
      ],
    },
    {id: 2,
      title: 'Workstation',
      list: ['Sequoia', 'Wavelab']
    },
    {id: 3,
    title: 'Digital',
    list: ['Lavry', 'RME', 'Weiss', 'Z-Sys']
    },
    {id:4,
    title: 'Playback',
    list: ['HEDDphones', 'PSB', 'Sennheiser']
    },
    {id:5,
     title: 'Plugins',
    list: ['CubeTec', 'MDW', 'Apogee', 'FabFilter', 'UAD', 'Waves', 'Izotope', 'etc...']
  }

  ]
  return (
    <div className="fullscreen delivery-cover-image">
      <BlankSpace/>
      <div className="text-center font-72 bold pb-3 mb-3 bg-secondary">Equipment</div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly">

      {EquipmentData.map(item => {
        return <div key={item.id} className=" m-2 px-2 py-3  bg-primary bg-opacity-75 rounded-4 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" >
                {/* <div className="card"> */}
                  {/* <div className="card-body"> */}
                    <h1 className="text-center card-title fs-1 text-dark bold">{item.title}</h1>
                    <ul className=" row">{item.list.map(listitem => {
                      return <li className=" py-2 px-4 text-center rounded text-center text-dark bg-transparent fs-4 col-auto d-flex-inline no-bullets">{listitem}</li>})}
                      </ul>
                  </div>
                // </div>
              // </div>
      })}
      </div>
      </div>

      

    </div>
  )
}
