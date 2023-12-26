import styles from './Features.module.css'
import Image from 'next/image'
import TextAnimation from '../UI/textAnimation/TextAnimation'
import ShowContainer from '../UI/showContainer'
const Features = () => {

    const title: string = 'The purpose of establishing this site'
    const message: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repudiandae illum error. Aperiam explicabo sint eaque vitae similique doloremque qui. Amet consequatur voluptates modi, sunt at officiis hic impedit nulla.'
    return (
        <ShowContainer>
            <div className={styles.featuresContainer}
            >
                <div className={styles.textArea}>
                    <TextAnimation title={title} textClass={'text-3xl'} staggerTime={0.005} />
                    <TextAnimation title={message} staggerTime={0.002} />
                </div>
                <div className={styles.featuresImage}>
                    <Image src={'/images/about-us-content.webp'} alt='herr' width={400} height={400} className='h-[50vh] md:h-auto mx-auto rounded-lg' />
                </div>
            </div>
        </ShowContainer>
    )
}

export default Features