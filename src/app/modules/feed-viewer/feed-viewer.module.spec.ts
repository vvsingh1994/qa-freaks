import { FeedViewerModule } from './feed-viewer.module';

describe('FeedViewerModule', () => {
  let feedViewerModule: FeedViewerModule;

  beforeEach(() => {
    feedViewerModule = new FeedViewerModule();
  });

  it('should create an instance', () => {
    expect(feedViewerModule).toBeTruthy();
  });
});
