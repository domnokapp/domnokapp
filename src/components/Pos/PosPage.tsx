import { Button, Text, Group, Alert, Image, Card, Badge, ScrollArea, Grid } from '@mantine/core';
import { IconBuildingStore } from '@tabler/icons-react';
import { Link } from '../Link';

function ProductItem() {
    return (
        <Grid.Col span={6}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>
  
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>
  
        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>
  
        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
      </Grid>
    );
  }

export function PosPage() {
    return (
        <ScrollArea>
            <Grid>
                <ProductItem />
            </Grid>
        </ScrollArea>
    );
}