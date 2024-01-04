import { EmptyStateContainer } from './styles';

const SRC = 'https://img.freepik.com/premium-vector/modern-flat-design-concept-no-result-found-empty-results-popup-design_637684-98.jpg';

export default function EmptyState() {
    return (
        <EmptyStateContainer>
            <div>
                <h1>No Data found !!</h1>
                <h3>Looks like no results were found...</h3>
            </div>

            <img
                src={SRC}
                alt="empty_page"
                height="400px"
                width="400px"
                objectFit = 'cover'
                loading="lazy" 
            />
        </EmptyStateContainer>
    );
}
