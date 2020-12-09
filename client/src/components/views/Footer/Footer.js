import React from 'react'
import {CopyrightOutlined} from "@ant-design/icons"

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Copyright © Logo 2020</p>
        </div>
    )
}

export default Footer
