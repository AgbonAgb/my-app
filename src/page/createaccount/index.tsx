
import Onboardlayout from "../../components/onboardinglayout"//this is the re-usable part of the form

import Form from '../../components/signup/form'//this if the actual form



const creataccount = () => {
    return <Onboardlayout heading="Create An Account" subheading="Let’s get started.">

        <Form />

    </Onboardlayout>
}

export default creataccount;