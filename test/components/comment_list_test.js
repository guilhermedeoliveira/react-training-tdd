import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['comment 1', 'comment 2', 'comment 3'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows a LI for each component', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('comment 1');
    expect(component).to.contain('comment 2');
    expect(component).to.contain('comment 3');
  });
});
