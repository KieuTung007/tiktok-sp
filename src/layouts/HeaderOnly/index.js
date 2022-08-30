import Header from '~/layouts/components/Header';

function HeaderOnly({ Children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{Children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
