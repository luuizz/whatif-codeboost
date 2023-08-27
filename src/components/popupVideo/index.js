import Image from 'next/image'
import { StylePopupVideo } from './styles'

import IconPlay from '/src/assets/play.svg'

export function PopupVideo () {
    return <StylePopupVideo>
        <span>Assista ao trailer</span>
        <button title='Reproduzir vídeo'>
            <div>
                <Image 
                src={IconPlay}
                alt='Ícone de um play'
                />
            </div>
        </button>
    </StylePopupVideo>
}