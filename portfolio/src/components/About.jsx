import React from 'react'

const About = () => {
  return (
    <div
        name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-500 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sit. Quas saepe, rem illum inventore quae quo? Nihil non impedit enim modi quod labore dolore. Beatae atque, quia ducimus rerum doloribus repellendus, tempore eum dolorum, facilis ut numquam. Eligendi est autem totam sit vero cupiditate nemo voluptatem dolor earum sequi.
            </p>

            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quasi, dolores magnam ut repellat iusto repellendus soluta voluptate maiores commodi, temporibus id molestias reiciendis odio deleniti quam doloremque distinctio quod pariatur minima vitae aliquam quaerat eligendi? Provident ipsam dolores nemo atque quasi perspiciatis, a aperiam culpa eius magni fuga voluptates?
            </p>

        </div>
    </div>
  )
}

export default About