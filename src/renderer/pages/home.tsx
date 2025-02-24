import { addEdge, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import React, { FC, useCallback } from 'react';

import { Typography } from '@/components/ui/typography';
import { Connection } from '@xyflow/system';

const initialNodes = [
  { data: { label: '1' }, id: '1', position: { x: 0, y: 0 } },
  { data: { label: '2' }, id: '2', position: { x: 0, y: 100 } }
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export const Home: FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  return (
    <>
      <Typography className='text-4xl font-bold' color='primary' variant='h1'>
        Home
      </Typography>

      <div style={{ height: '100vh', width: '90vw' }}>
        <ReactFlow
          edges={edges}
          nodes={nodes}
          onConnect={onConnect}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}>
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};
