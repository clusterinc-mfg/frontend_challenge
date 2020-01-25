import {
    Card,
    DescHeader,
    Description,
    FieldWrapper,
    TuitionLabel,
    TuitionRow,
    TuitionValue,
    Wrapper
} from './ProgramInfo.styles'

const ProgramInfo = ({programDescription, schoolDescription, schoolName, costPerCredit, requiredCredits}) => (
    <Wrapper>
        <FieldWrapper>
            <DescHeader>Earn Your Degree</DescHeader>
            <Description>{programDescription}</Description>
            <DescHeader>About {schoolName}</DescHeader>
            <Description>{schoolDescription}</Description>
        </FieldWrapper>
        <Card>
            <DescHeader center>Tuition Breakdown</DescHeader>
            <TuitionRow>
                <TuitionLabel>Cost per credit: </TuitionLabel>
                <TuitionValue >${costPerCredit || 40}</TuitionValue>
            </TuitionRow>
            <TuitionRow>
                <TuitionLabel>Annual Credits:* </TuitionLabel>
                <TuitionValue >{requiredCredits || 20}</TuitionValue>
            </TuitionRow>
            <hr></hr>
            <TuitionRow>
                <TuitionLabel>Estimated Cost: </TuitionLabel>
                <TuitionValue >${(costPerCredit || 40) * (requiredCredits || 20) }</TuitionValue>
            </TuitionRow>
        </Card>
    </Wrapper>
)

export default ProgramInfo
