import {
  Container,
  Line,
  ResponsiveBox,
  ResponsiveItem,
  Button,
  ArrowIcon
} from './components'
import {
  url,
  text
} from './constants'
function App() {
  return (
    <Container>
      <Line/>
      <h1 className=" text-3xl text-green-500 py-6">이용 방법</h1>
      <h2 className=" text-2xl py-4">[교사] 학습 환경 준비</h2>
      <ResponsiveBox>
        <ResponsiveItem className='border p-4 md:border-none md:p-0'>
          <h3 className='text-xl text-green-500'>1</h3>
          <span>{text.consult}</span>
          <img src={url.consult} alt="consult" />
          <Button>
            상담 및 체험 신청
          </Button>
        </ResponsiveItem>
        <ResponsiveItem className='basis-1/4'>
          <ArrowIcon />
        </ResponsiveItem>
        <ResponsiveItem className='border p-4 md:border-none md:p-0'>
        <h3 className='text-xl text-green-500'>2</h3>
          <span>{text.lms}</span>
          <img src={url.consult} alt="consult" />
        </ResponsiveItem>
        <ResponsiveItem className='basis-1/4'>
          <ArrowIcon />
        </ResponsiveItem>
        <ResponsiveItem className='border p-4 md:border-none md:p-0'>
        <h3 className='text-xl text-green-500'>3</h3>
          <span>{text.lms2}</span>
          <img src={url.consult} alt="consult" />
          <Button>
            <a href="">LMS 바로가기</a>
          </Button>
          <Button>
            <a href="">LMS 매뉴얼 보기</a>
          </Button>
        </ResponsiveItem>
      </ResponsiveBox>
      <Line/>
      <h2 className=" text-2xl py-4">[학생] 학습 하기</h2>
      <ResponsiveBox className='border p-4 md:border-none md:p-0'>
        <ResponsiveItem>
        <h3 className='text-xl text-green-500'>1</h3>
          <span>{text.web}</span>
          <img src={url.web} alt="consult" />
          <Button>
            웹버전으로 들어가기
          </Button>
        </ResponsiveItem>
        <ResponsiveItem className='basis-1/4'>
          <ArrowIcon />
        </ResponsiveItem>
        <ResponsiveItem className='border p-4 md:border-none md:p-0'>
        <h3 className='text-xl text-green-500'>2</h3>
          <span>{text.tablet}</span>
          <img src={url.tablet} alt="consult" />
        </ResponsiveItem>
        <ResponsiveItem className='basis-1/4'>
          <ArrowIcon />
        </ResponsiveItem>
        <ResponsiveItem className='border p-4 md:border-none md:p-0'>
        <h3 className='text-xl text-green-500'>3</h3>
          <span>{text.tablet2}</span>
          <img src={url.tablet} alt="consult" />
        </ResponsiveItem>
      </ResponsiveBox>
    </Container>
  )
}

export default App
