import React from 'react';
import gql from 'graphql-tag';
import { Query, ApolloConsumer } from 'react-apollo';

// query
const PAGE_LAYOUTS_QUERY = gql`
  query pageLayouts {
    pageLayouts {
      id
      name
      jsonSchema
    }
    isEditMode @client
  }
`;

// Example query
const ExampleApollo = () => (
  <div className="App">
    <Query query={PAGE_LAYOUTS_QUERY}>
      {({ loading, data }) => {
        if (loading) return 'Loading';
        const { pageLayouts, isEditMode } = data;
        const renderPageLayouts = pageLayouts.map(layout => (
          <p key={layout.id}>{layout.name}</p>
        ));

        return (
          <>
            <ToggleEditMode isEditMode={isEditMode} />
            <code>
              EditMode:
              {isEditMode ? <b> true</b> : <b> false</b>}
            </code>
            {renderPageLayouts}
          </>
        );
      }}
    </Query>
  </div>
);

// updating apollo client local state "isEditMode" prop (cache)
const ToggleEditMode = ({ isEditMode }) => (
  <section>
    <ApolloConsumer>
      {client => (
        <button
          type="button"
          onClick={() => client.writeData({
            data: { isEditMode: !isEditMode },
          })
          }
        >
          Toggle EditMode
        </button>
      )}
    </ApolloConsumer>
    <p>Edit mode is turned on</p>
  </section>
);

export default ExampleApollo;
