import ContentLoader from 'react-content-loader'

const CardSkeleton = () => (
    <ContentLoader
      animate={true}
      speed={2}
      width={800}
      height={240}
      backgroundColor="#eeeeee"
      foregroundColor='#F4F5FF'
    >
      <>
        <rect x="20" y="20" rx="10" ry="10" width="260" height="2" />
        <rect x="300" y="20" rx="3" ry="3" width="75" height="23"/>
        <rect x="395" y="20" rx="3" ry="3" width="86" height="23"/>
        <rect x="760" y="20" rx="3" ry="3" width="23" height="23"/>

        <rect x="300" y="60" rx="3" ry="3" width="485" height="32"/>
        <rect x="300" y="110" rx="3" ry="3" width="485" height="32"/>

        <rect x="465" y="180" rx="3" ry="3" width="150" height="36"/>
        <rect x="635" y="180" rx="3" ry="3" width="150" height="36"/>
      </>
    </ContentLoader>
)

export function CardSkeletonContainer () {
    return (
      <div className='wordSet'>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
    )
}
