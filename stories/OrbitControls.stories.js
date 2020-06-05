import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Canvas, useFrame } from 'react-three-fiber'

import { Setup } from '../.storybook/Setup'

import { OrbitControls } from '../src/OrbitControls'
import { Box } from '../src/shapes'

export function OrbitControlsStory() {
  return (
    <>
      <OrbitControls />
      <Box>
        <meshBasicMaterial attach="material" wireframe />
      </Box>
    </>
  )
}

OrbitControlsStory.story = {
  name: 'Default',
}

export default {
  title: 'Controls/OrbitControls',
  component: OrbitControls,
  decorators: [(storyFn) => <Setup>{storyFn()}</Setup>],
}
