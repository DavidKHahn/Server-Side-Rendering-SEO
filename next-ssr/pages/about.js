import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
    <div style={{fontSize: '20px', color: 'red'}}>
        <h1>About</h1>
        <Link href='/'>
            <button>Back</button>
        </Link>
        <Image />
        <p>I was a magician once upon a time...</p>
    </div>
)

export default About;