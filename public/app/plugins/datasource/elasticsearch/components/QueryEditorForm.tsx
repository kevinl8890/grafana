import React, { ComponentProps, FunctionComponent, memo } from 'react';
import { InlineField, InlineFieldRow, Input, QueryField } from '@grafana/ui';
import { MetricAggregationsEditor } from './MetricAggregationsEditor';
import { ElasticsearchQuery } from '../types';
import { BucketAggregationsEditor } from './BucketAggregationsEditor';

const labelsProps: Partial<ComponentProps<typeof InlineField>> = {
  labelWidth: 15,
};

interface Props {
  value: ElasticsearchQuery;
}

export const QueryEditorForm: FunctionComponent<Props> = memo(({ value }) => {
  return (
    <>
      <InlineFieldRow>
        <InlineField label="Query" {...labelsProps} grow>
          <QueryField
            query={value.query}
            // onChange={onQueryChange}
            // onRunQuery={onRunQuery}
            placeholder="Lucene Query"
            portalOrigin="elasticsearch"
          />
        </InlineField>
        <InlineField label="Alias" {...labelsProps}>
          <Input
            placeholder="Alias Pattern"
            id="elastic-alias"
            onChange={() => {
              // TODO: Change alias
            }}
          />
        </InlineField>
      </InlineFieldRow>

      <MetricAggregationsEditor value={value.metrics || []} />
      <BucketAggregationsEditor value={value.bucketAggs || []} />
    </>
  );
});