import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  // console.log('Grid rendering with children:', props.children);
  
  return (
    <ul {...props} className={clsx('grid grid-flow-row gap-x-2 gap-y-8', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {

  
  return (
    <li {...props} className={clsx('aspect-square transition-opacity', props.className)}>
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
